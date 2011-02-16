metal.ns('metal.ui.Label');

/**
 * 
 * @class View
 */
metal.ui.Label = metal.extend(metal.ui.AbstractView, {
  
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
        metal.debug.info('Label::' + this.id, 'constructor');

        // Set Titanium component
        this.titaniumComponent = { properties: this.properties };

        // Call parent constructor
        metal.ui.Label.superclass.constructor.call(this);
    },
    
    /**
     * Titanium properties
     *
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {
    	autoLink: {
    		type: 'int',
    		androidOnly: true
    	},
    	backgroundPaddingBottom: {
    		type: 'int'
    	},
    	backgroundPaddingLeft: {
    		type: 'int'
    	},
    	backgroundPaddingRight: {
    		type: 'int'
    	},
    	backgroundPaddingTop: {
    		type: 'int'
    	},
    	ellipsize: {
    		type: 'boolean',
    		androidOnly: true
    	},
    	highlightedColor: {
    		type: 'string'
    	},
    	html: {
    		type: 'string',
    		androidOnly: true
    	},
    	minimumFontSize: {
    		type: 'int'
    	},
    	shadowColor: {
    		type: 'string'
    	},
    	shadowOffset: {
    		type: 'object'
    	},
    	text: {
    		type: 'string'
    	},
    	textAlign: {
    		type:'string,int'
    	},
    	textid: {
    		type: 'string'
    	},
    	wordWrap: {
    		type: 'boolean',
    		androidOnly: true
    	}
    }
  
});
