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
		id: 'MetalButton_' + metal.generateId(),

		/**
 		* <p>the foreground color of the button text</p>
 		*
 		* @property {string} color
 		*/
		color: undefined,
		/**
 		* <p>boolean that indicates if the button is enabled or not</p>
 		*
 		* @property {boolean} enabled
 		*/
		enabled: true,

		/**
 		* <p>the font properties of the button</p>
 		*
 		* @property {object} font
 		*/
		font: undefined,

		/**
 		* <p>the image to display on the button to the left of the title</p>
 		*
 		* @property {string} image
 		*/
		image: undefined,

		/**
 		* <p>style constant for the type of button</p>
 		*
 		* @property {int} style
 		*/
		style: undefined,
		/**
 		* <p>button title</p>
 		*
 		* @property {string} title
 		*/
		title: undefined,
		/**
 		* <p>the key in the locale file to use for the title property</p>
 		*
 		* @property {string} titleid
 		*/
		titleid: undefined
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
		dlog('Button::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createButton(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.Button.superclass.constructor.call(this);
	},
	
	initEvents: function() {
		// Call parent
		metal.ui.Button.superclass.initEvents.call(this);
	}
});
