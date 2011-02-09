metal.ns('metal.ui.Button');

/**
 * 
 * @class View
 */
metal.ui.Button = metal.extend(metal.ui.AbstractMetalView, {
  
  /**
     * The id of this window
     *
     * @private
     * @property {String} id
     */
    id: 'MetalButton',
	
	type: 'MetalButton',
	
    /**
     * Holds all this view's properties
     *
     * @property {Object} properties
     */
    properties : {
        
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
        metal.debug.info('Button::' + this.id, 'constructor');

        // Set native component
        this.view = Ti.UI.createButton(this.properties);

        this.initComponents();
        this.initEvents();
        // Call parent constructor
        metal.ui.Button.superclass.constructor.call(this);
    }
  
});
