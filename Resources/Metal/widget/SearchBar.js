metal.ns('metal.widget.SearchBar');

/**
 * This class represents a search bar
 *
 * @class metal.widget.Search
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.widget.SearchBar = metal.extend(metal.ui.AbstractView, {

	/**
 	* The type of this component
 	*
 	* @private
 	* @property {String} type
 	*/
	type: 'MetalSearchBar',

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
		id: 'metalSearchBar_' + metal.generateId(),

		/**
 		* <p>One of <a href="Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE-property.html">Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE</a>, <a href="Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS-property.html">Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS</a>, <a href="Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES-property.html">Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES</a>, or <a href="Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL-property.html">Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL</a> to indicate how the field should be capitalized during typing.</p>
 		*
 		* @property {int} autocapitalization
 		*/
		autocapitalization: undefined,
		/**
 		* <p>boolean to indicate if the text in the field should be autocorrected as typed</p>
 		*
 		* @property {boolean} autocorrect
 		*/
		autocorrect: undefined,

		/**
 		* <p>the bar color of the search bar view</p>
 		*
 		* @property {string} barColor
 		*/
		barColor: undefined,

		/**
 		* <p>the text to show when the search bar field is not focused</p>
 		*
 		* @property {string} hintText
 		*/
		hintText: undefined,
		/**
 		* <p>the key in the locale file to use for the hintText property</p>
 		*
 		* @property {string} hinttextid
 		*/
		hinttextid: undefined,
		/**
 		* <p>the keyboard type constant to use when the field is focused</p>
 		*
 		* @property {int} keyboardType
 		*/
		keyboardType: undefined,

		/**
 		* <p>a single line of text displayed at the top of the search bar</p>
 		*
 		* @property {string} prompt
 		*/
		prompt: undefined,
		/**
 		* <p>the key in the locale file to use for the prompt property</p>
 		*
 		* @property {string} promptid
 		*/
		promptid: undefined,
		
		/**
 		* <p>boolean indicates whether the cancel button is displayed</p>
 		*
 		* @property {boolean} showCancel
 		*/
		showCancel: undefined,

		/**
 		* <p>the value of the search bar</p>
 		*
 		* @property {string} value
 		*/
		value: undefined
	},

	/**
 	* The Titanium component this class wraps
 	*
 	* @property {Titanium.UI.SearchBar} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('SearchBar:: ' + this.get('id'), 'constructor');
		
		// Set Titanium component
		this.component = Ti.UI.createSearchBar(metal.formatProperties(this.properties));

		// Call parent
		metal.widget.SearchBar.superclass.constructor.call(this);
	},
	/**
 	* called to force the search bar to lose focus
 	*
 	* @method blur
 	*/
	blur: function() {
		this.component.blur();
	},
	/**
 	* called to force the search bar to focus
 	*
 	* @method focus
 	*/
	focus: function() {
		this.component.focus();
	}
});
