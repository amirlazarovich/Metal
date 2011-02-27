metal.ns('metal.ui.Label');

/**
 * 
 * @class metal.ui.Label
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.Label = metal.extend(metal.ui.AbstractView, {
	
	type: 'MetalLabel',
	
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
	    id: 'MetalLabel'
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
        dlog('Label::' + this.get('id'), 'constructor');

        // Set Titanium component
        this.titaniumComponent = Ti.UI.createLabel(this.properties);

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
    	color: {
    		type: 'string'
    	},
    	ellipsize: {
    		type: 'boolean',
    		androidOnly: true
    	},
    	font: {
    		type: 'object'
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
