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
    
    type: 'MetalTab',
    
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
     * The window this tab will show
     * 
     * @property {metal.ui.AbstractMetalView} window
     */
     //TODO --fix-required-- Shouldnt this property need to be in the properties property?
     // 					 It's kinda confusing
    window: undefined,
    
    /**
     * @constructor
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        metal.debug.info('Tab::' + this.id, 'constructor');
       
        // Set native component
        this.view = Ti.UI.createTab(this.properties);
       
       	// Set enclosing window
       	if (this.window) {
       		this.view.window = typeof this.window.getView != 'undefined' ? this.window.getView() : this.window;
       	} else {
       		this.window = this.view.window;
        }
       
        // Call parent constructor
        metal.ui.Tab.superclass.constructor.call(this);
    },
    
    /**
     * @override
     * @event beforeopen
     * @param {Object} obj
     */
    beforeopen: function(obj) {
        metal.debug.info('Tab::' + this.id, 'before open event');
        // Fire event on enclosing window
        var rtnValue = this.window.fire('beforeopen');
        return rtnValue || metal.ui.Tab.superclass.beforeopen(obj);
    },
    /**
     * @override
     * @event beforeclose
     * @param {Object} obj
     */
    beforeclose: function(obj) {
        metal.debug.info('Tab::' + this.id, 'before close event');
        // Fire event on enclosing window
        var rtnValue = this.window.fire('beforeclose');
        return rtnValue || metal.ui.Tab.superclass.beforeclose(obj);
    }
});
