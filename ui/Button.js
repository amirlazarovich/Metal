metal.ns('metal.ui.Button');

/**
 * 
 * @class metal.ui.Button
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.Button = metal.extend(metal.ui.AbstractView, {
  
	type: 'MetalButton',
	
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
	    id: 'MetalButton'
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
        dlog('Button::' + this.get('id'), 'constructor');

        // Set Titanium component
        this.titaniumComponent = Ti.UI.createButton(this.properties);

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
