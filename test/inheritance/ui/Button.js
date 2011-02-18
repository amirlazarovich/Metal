metal.ns('metal.ui.Button');

/**
 * 
 * @class View
 */
metal.ui.Button = metal.extend(metal.ui.AbstractView, {
  
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
        metal.debug.info('Button::' + this.id, 'constructor');

        // Set Titanium component
        this.titaniumComponent = { properties: this.properties };

        // Call parent constructor
        metal.ui.Button.superclass.constructor.call(this);
    },
    
    /**
     * Titanium properties
     *
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {
    	enabled: {
    		type: 'boolean'
    	},
    	image: {
    		type: 'string'
    	},
    	selectedColor: {
    		type: 'string'
    	},
    	style: {
    		type: 'object'
    	},
    	title: {
    		type: 'string'
    	},
    	titleid: {
    		type: 'string'
    	}
    }
  
});
