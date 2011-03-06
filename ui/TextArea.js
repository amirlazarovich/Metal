metal.ns('metal.ui.TextArea');

/**
 * This class represents a Text Field UI component
 *
 * @class metal.ui.TextArea
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.TextArea = metal.extend(metal.ui.AbstractView, {

	/**
 	* The type of this component
 	*
 	* @private
 	* @property {String} type
 	*/
	type: 'MetalTextArea',

	/**
 	* The picker configuration properties
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
		id: 'MetalTextArea',

		/**
 		* <p>whether or not to convert text within this area to clickable links. iOS only.</p>
 		*
 		* @property {int} autoLink
 		*/
		autoLink: {
			value: undefined,
			android: false
		},
		/**
 		* <p>One of <a href="Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE-property.html">Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE</a>, <a href="Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS-property.html">Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS</a>, <a href="Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES-property.html">Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES</a>, or <a href="Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL-property.html">Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL</a> to indicate how the field should be capitalized during typing. (only Android)</p>
 		*
 		* @property {int} autocapitalization
 		*/
		autocapitalization: undefined,

		/**
 		* <p>boolean indicating if the field is editable</p>
 		*
 		* @property {boolean} editable
 		*/
		editable: undefined,
		/**
 		* <p>boolean indicating the enabled state of the field</p>
 		*
 		* @property {boolean} enabled
 		*/
		enabled: undefined,

		/**
 		* <p>array of toolbar button objects to be used when the keyboard is displayed</p>
 		*
 		* @property {array} keyboardToolbar
 		*/
		keyboardToolbar: undefined,
		/**
 		* <p>the color of the keyboard toolbar</p>
 		*
 		* @property {string} keyboardToolbarColor
 		*/
		keyboardToolbarColor: undefined,
		/**
 		* <p>the height of the keyboard toolbar</p>
 		*
 		* @property {float} keyboardToolbarHeight
 		*/
		keyboardToolbarHeight: undefined,

		/**
 		* <p>boolean to indicate if the return key should be suppressed during entry</p>
 		*
 		* @property {boolean} suppressReturn
 		*/
		suppressReturn: true,

		/**
 		* <p>value of the field</p>
 		*
 		* @property {string} value
 		*/
		value: undefined
	},

	/**
 	* The Titanium component this class wraps
 	*
 	* @property {Titanium.UI.TextArea} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('TextArea::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createTextArea(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.TextArea.superclass.constructor.call(this);
	},
	/**
 	* Force the field to lose focus
 	*
 	* @method blur
 	*/
	blur: function() {
		this.component.blur();
	},
	/**
 	* Force the field to gain focus
 	*
 	* @method focus
 	*/
	focus: function() {
		this.component.focus();
	},
	/**
 	* Check if this field has text
 	*
 	* @method hasText
 	* @return {Boolean} true/false
 	*/
	hasText: function() {
		return this.component.hasText();
	}
});
