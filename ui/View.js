metal.ns('metal.ui.View');

/**
 * 
 * @class metal.ui.View
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.View = metal.extend(metal.ui.AbstractView, {
  
	type: 'MetalView',
	
    /**
     * Holds all this view's properties
     *
     * @property {Object} properties
     */
    properties : {
       	/**
	     * The id of this window
	     *
	     * @private
	     * @property {String} id
	     */
	    id: 'MetalView'
    },

    /**
     * The Titanium view this class wraps
     *
     * @property {Titanium.UI.View} titaniumComponent
     */
    titaniumComponent: undefined,
    
    /**
     * @constructor
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        dlog('View::' + this.get('id'), 'constructor');

        // Set native component
        this.titaniumComponent = Ti.UI.createView(this.properties);

        // Call parent constructor
        metal.ui.View.superclass.constructor.call(this);
    },
    
    /**
     * Titanium properties
     * 
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {
    	layout: {
    		type: 'string'
    	}
    }
  
});
