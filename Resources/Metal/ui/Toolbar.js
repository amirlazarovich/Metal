metal.ns('metal.ui.Toolbar');
/**
 * 
 * @class metal.ui.Toolbar
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.Toolbar = metal.extend(metal.ui.AbstractView, {
	type: 'MetalToolbar',

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
		id: 'MetalToolbar_' + metal.generateId()
	},

	/**
 	* The Titanium view this class wraps
 	*
 	* @property {Titanium.UI.Toolbar} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('Toolbar::' + this.get('id'), 'constructor');

		// Set native component
		this.component = Titanium.UI.createToolbar(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.Toolbar.superclass.constructor.call(this);
	}
});
