metal.ns('metal.widget.Serach');

/**
 * This class represents a search bar
 * 
 * @class metal.widget.Search
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.widget.Search = metal.extend(metal.ui.AbstractView, {
	
	/**
	 * The type of this component
	 * 
	 * @private
	 * @property {String} type
	 */
	type: 'MetalSearch',
	
	/**
	 * The search bar configuration properties
	 * 
	 * @property {Object} properties
	 */
	properties: {
		/**
	     * The id of this component
	     *
	     * @private
	     * @property {String} id
	     */
		id: 'metalSearch'
	},
	
	/**
	 * The Titanium component this class wraps
	 * 
	 * @property {Titanium.UI.SearchBar} titaniumComponent
	 */
	titaniumComponent: undefined,
	
	/**
	 * @constructor
	 * @param {Object} config
	 */
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('Search:: ' + this.get('id'), 'constructor');
		
		// Set Titanium component
		this.titaniumComponent = Ti.UI.createSearchBar(this.properties);
		
		// Call parent
		metal.widget.Search.superclass.constructor.call(this);
	},
	
	/**
	 * called to force the search bar to lose focus
	 * 
	 * @method blur
	 */
	blur: function() {
		this.titaniumComponent.blur();
	},
	
	/**
	 * called to force the search bar to focus
	 * 
	 * @method focus
	 */
	focus: function() {
		this.titaniumComponent.focus();
	},
	
	/**
     * Titanium properties
     *
     * @property {Object} titaniumProperties
     */
	titaniumProperties: {
		autocapitalization: {
			type: 'int'
		},
		
		autocorrect: {
			type: 'boolean'
		},
		
		hintText: {
			type: 'string'
		},
		
		hinttextid: {
			type: 'string'
		},
		
		keyboardType: {
			type: 'int'
		},
		
		prompt: {
			type: 'string'
		},
		
		promptid: {
			type: 'string'
		},
		
		showCancel: {
			type: 'boolean'
		},
		
		value: {
			type: 'string'
		}
	}
	
});
