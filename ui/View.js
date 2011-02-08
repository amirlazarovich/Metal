metal.ns('metal.ui.View');

/**
 * 
 * @class View
 */
metal.ui.View = metal.extend(metal.ui.AbstractMetalView, {
  
  /**
     * The id of this window
     *
     * @private
     * @property {String} id
     */
    id: 'MetalView',

    /**
     * Holds all this view's properties
     *
     * @property {Object} properties
     */
    properties : {
        backgroundColor: 'white'
    },

    /**
     * The native view this class wraps
     *
     * @property {Titanium.UI.View} view
     */
    view: undefined,
    
    /**
     * @constructor
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        metal.debug.info('View::' + this.id, 'constructor');

        // Set native component
        this.view = Ti.UI.createView(this.properties);

        this.initComponents();
        this.initEvents();
        // Call parent constructor
        metal.ui.View.superclass.constructor.call(this);
    }
  
});
