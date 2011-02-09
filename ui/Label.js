metal.ns('metal.ui.Label');

/**
 * 
 * @class View
 */
metal.ui.Label = metal.extend(metal.ui.AbstractMetalView, {
  
  /**
     * The id of this window
     *
     * @private
     * @property {String} id
     */
    id: 'MetalLabel',
	
	type: 'MetalLabel',
	
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
        metal.debug.info('Label::' + this.id, 'constructor');

        // Set native component
        this.view = Ti.UI.createLabel(this.properties);

        this.initComponents();
        this.initEvents();
        // Call parent constructor
        metal.ui.Label.superclass.constructor.call(this);
    }
  
});
