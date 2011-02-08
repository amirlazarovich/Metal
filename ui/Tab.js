metal.ns('metal.ui.Tab');

/**
 * 
 * @class Tab
 */
metal.ui.Tab = metal.extend(metal.ui.AbstractMetalView, {
  
    /**
     * The id of this window
     * 
     * @private
     * @property {String} id
     */
    id: 'MetalTab',
    
    /**
     * Holds all this class's properties
     *
     * @property {Object} properties
     */
    properties : {
      window: {},
      title:'Metal Tab'
    },
    
    /**
     * The native view this class wraps
     * 
     * @property {Titanium.UI.Tab}
     */
    view: undefined,
    
    /**
     * @constructor
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        metal.debug.info('Tab::' + this.id, 'constructor');
       
        // Set native component
        this.view = Ti.UI.createTab(this.properties);
       
        // Call parent constructor
        metal.ui.Tab.superclass.constructor.call(this);
    }
});
