metal.ns('metal.widget.ActivityIndicator');

/**
 * 
 * @class metal.widget.AcitivityIndicator
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.widget.ActivityIndicator = metal.extend(metal.ui.ControlledComponent, {
	type: 'MetalActivityIndicator',

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
		id: 'MetalActivityIndicator_' + metal.generateId(),
		
		/**
	 	* Description
	 	*
	 	* @property {Type} Name
	 	*/
		Name: undefined,
		/**
	 	* <p>the color of the message label</p>
	 	*
	 	* @property {string} color
	 	*/
		color: undefined,
		/**
	 	* <p>the font object for the activity message label</p>
	 	*
	 	* @property {object} font
	 	*/
		font: undefined,
		/**
	 	* <p>the activity message label text</p>
	 	*
	 	* @property {string} message
	 	*/
		message: undefined,
		/**
	 	* <p>the key in the locale file to use for the message property</p>
	 	*
	 	* @property {string} messageid
	 	*/
		messageid: undefined,
		/**
	 	* <p>the style constant of the activity indicator</p>
	 	*
	 	* @property {int} style
	 	*/
		style: {
			value: undefined,
			format: function() {
				if (metal.osname == 'iphone') {
					return this.value || Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN;
				} else {
					return this.value;
				}
			}
		},
		
		/**
		 * @property {string|int} width
		 */
		width: 25,
		
		/**
		 * @property {string|int} height
		 */
		height: 25
	},

	/**
 	* The Titanium view this class wraps
 	*
 	* @property {Titanium.UI.ActivityIndicator} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('ActivityIndicator::' + this.get('id'), 'constructor');

		// Set native component
		this.component = Titanium.UI.createActivityIndicator(metal.formatProperties(this.properties));
		
	
		// Call parent constructor
		metal.widget.ActivityIndicator.superclass.constructor.call(this);
	},
	
	/**
	 * Get the wrapped Titanium component
	 * 
	 * @method getView
	 */
	getView: function() {
		return this.component;
	},
	
	/**
	 * call hide to make the activity indicator hidden and stop spinning
	 * 
	 * @method hide
	 */
	hide: function() {
		this.component.hide();
	},
	
	/**
	 * call show to make the activity indicator visible and start spinning
	 * 
	 * @method show
	 */
	show: function() {
		this.component.show();
	}
});
