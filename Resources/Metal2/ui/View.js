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
		id: 'MetalView_' + metal.generateId(),

		/**
 		* <p>the layout algorithm to use for the layout. either absolute (default), vertical or Horiznotal</p>
 		*
 		* @property {string} layout
 		*/
		layout: undefined
	},

	/**
 	* The Titanium view this class wraps
 	*
 	* @property {Titanium.UI.View} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('View::' + this.get('id'), 'constructor');

		// Set native component
		this.component = Ti.UI.createView(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.View.superclass.constructor.call(this);
	}
});
