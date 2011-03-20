metal.ns('metal.ui.ButtonBar');
/**
 * Button Bar
 * 
 * @class metal.ui.ButtonBar
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.ButtonBar = metal.extend(metal.ui.AbstractView, {
	
	type: 'MetalButtonBar',

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
		id: 'MetalButtonBar_' + metal.generateId(),
		
		/**
	 	* <p>the selected index</p>
	 	*
	 	* @property {int} index
	 	*/
		index: undefined,
		
		/**
	 	* <p>the array of labels for the button bar. each object should have the properties <tt>title</tt>, <tt>image</tt>, <tt>width</tt> and <tt>enabled</tt>.</p>
	 	*
	 	* @property {array} labels
	 	*/
		labels: undefined,
		
		/**
	 	* <p>the style of the button bar</p>
	 	*
	 	* @property {int} style
	 	*/
		style: undefined
		
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
		dlog('ButtonBar::' + this.get('id'), 'constructor');

		// Set native component
		this.component = Ti.UI.createButtonBar(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.ButtonBar.superclass.constructor.call(this);
	}
});
