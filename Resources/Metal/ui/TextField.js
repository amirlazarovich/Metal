metal.ns('metal.ui.TextField');

/**
 * This class represents a Text Field UI component
 *
 * @class metal.ui.TextField
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.TextField = metal.extend(metal.ui.AbstractView, {

	/**
 	* The type of this component
 	*
 	* @private
 	* @property {String} type
 	*/
	type: 'MetalTextField',

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
		id: 'MetalTextField_' + metal.generateId(),

		/**
 		* <p>One of <a href="Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE-property.html">Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE</a>, <a href="Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS-property.html">Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS</a>, <a href="Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES-property.html">Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES</a>, or <a href="Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL-property.html">Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL</a> to indicate how the field should be capitalized during typing.</p>
 		*
 		* @property {int} autocapitalization
 		*/
		autocapitalization: 0,

		/**
 		* <p>the border style constant for the field</p>
 		*
 		* @property {int} borderStyle
 		*/
		borderStyle: metal.ui.INPUT_BORDERSTYLE_ROUNDED,

		/**
 		* <p>the mode constant for how to handle displaying the clear button</p>
 		*
 		* @property {int} clearButtonMode
 		*/
		clearButtonMode: 0,
		/**
 		* <p>boolean that indicates if the value of the field is cleared upon editing</p>
 		*
 		* @property {boolean} clearOnEdit
 		*/
		clearOnEdit: false,
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
		enabled: true,
		
		/**
 		* <p>the font properties of the button</p>
 		*
 		* @property {object} font
 		*/
		font: undefined,
		
		/**
 		* <p>the hint text to display when the field is unfocused</p>
 		*
 		* @property {string} hintText
 		*/
		hintText: null,
		/**
 		* <p>array of toolbar button objects to be used when the keyboard is displayed</p>
 		*
 		* @property {array} keyboardToolbar
 		*/
		keyboardToolbar: null,
		/**
 		* <p>the color of the keyboard toolbar</p>
 		*
 		* @property {string} keyboardToolbarColor
 		*/
		keyboardToolbarColor: null,
		/**
 		* <p>the height of the keyboard toolbar</p>
 		*
 		* @property {float} keyboardToolbarHeight
 		*/
		keyboardToolbarHeight: 0,

		/**
 		* <p>the left button view</p>
 		*
 		* @property {object} leftButton
 		*/
		leftButton: null,
		/**
 		* <p>the mode of the left button view</p>
 		*
 		* @property {int} leftButtonMode
 		*/
		leftButtonMode: 0,
		/**
 		* <p>the left padding of the space between the button and the edge of the field</p>
 		*
 		* @property {float} leftButtonPadding
 		*/
		leftButtonPadding: undefined,
		/**
 		* <p>the minimum size of the font when the font is sized based on the contents. Enables font scaling to fit</p>
 		*
 		* @property {int} minimumFontSize
 		*/
		minimumFontSize: undefined,

		/**
 		* <p>the left padding of the text field</p>
 		*
 		* @property {float} paddingLeft
 		*/
		paddingLeft: undefined,
		/**
 		* <p>the right padding of the text field</p>
 		*
 		* @property {float} paddingRight
 		*/
		paddingRight: undefined,

		/**
 		* <p>the right button view</p>
 		*
 		* @property {object} rightButton
 		*/
		rightButton: null,
		/**
 		* <p>the mode of the right button view</p>
 		*
 		* @property {int} rightButtonMode
 		*/
		rightButtonMode: 0,
		/**
 		* <p>the right padding of the space between the button and the edge of the field</p>
 		*
 		* @property {float} rightButtonPadding
 		*/
		rightButtonPadding: undefined,

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
		value: '',
		/**
 		* <p>the constant or string value for the fields vertical alignment.</p>
 		*
 		* @property {int,string} verticalAlign
 		*/
		verticalAlign: 0,
		
		/**
		 * @override
		 */
		width: 200,
		
		/**
		 * @override
		 */
		height: 30
	},

	/**
 	* The Titanium component this class wraps
 	*
 	* @property {Titanium.UI.TextField} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('TextField::' + this.properties.id, 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createTextField(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.TextField.superclass.constructor.call(this);
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
	},
	
	/**
     * @override
     */
    get: function(name) {
        if (this.isTitaniumProperty(name) && !this.isDiscarded(name)) {
        	var prop = this.properties[name];
        	if (prop.hasOwnProperty('value')) {
        		// The value of this property is nested inside an object
        		prop = prop.value;
        	}
            // Titanium property
            return this.component? this.component[name] || prop : prop;
        } else {
            // Metal property
            return this[name];
        }
    }
});
