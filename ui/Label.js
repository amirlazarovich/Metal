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
		id: 'MetalLabel_' + metal.generateId(),

		/**
 		* <p>One of Ti.UI.Android.LINKIFY constants. Automatically create clickable links for the specified type. (Android Only)</p>
 		*
 		* @property {int} autoLink
 		*/
		autoLink: {
			value: undefined,
			iphone: false
		},

		/**
 		* <p>the number of pixels to extend the background image past the label on the bottom</p>
 		*
 		* @property {int} backgroundPaddingBottom
 		*/
		backgroundPaddingBottom: undefined,
		/**
 		* <p>the number of pixels to extend the background image past the label on the left</p>
 		*
 		* @property {int} backgroundPaddingLeft
 		*/
		backgroundPaddingLeft: undefined,
		/**
 		* <p>the number of pixels to extend the background image past the label on the right</p>
 		*
 		* @property {int} backgroundPaddingRight
 		*/
		backgroundPaddingRight: undefined,
		/**
 		* <p>the number of pixels to extend the background image past the label on the top</p>
 		*
 		* @property {int} backgroundPaddingTop
 		*/
		backgroundPaddingTop: undefined,

		/**
 		* <p>the color of the label</p>
 		*
 		* @property {string} color
 		*/
		color: undefined,
		/**
 		* <p>Turn on/off the addition of ellipses at the end of the label if the text is too large to fit. (Android Only, default false)</p>
 		*
 		* @property {bool} ellipsize
 		*/
		ellipsize: {
			value: undefined,
			iphone: false
		},

		/**
 		* <p>the label font object properties</p>
 		*
 		* @property {object} font
 		*/
		font: undefined,

		/**
 		* <p>the color of the label when in the highlighted state</p>
 		*
 		* @property {string} highlightedColor
 		*/
		highlightedColor: undefined,
		/**
 		* <p>simple html formatting. (Android Only)</p>
 		*
 		* @property {string} html
 		*/
		html: {
			value: undefined,
			iphone: false
		},

		/**
 		* <p>the minimum size of the font when the font is sized based on the contents. Enables font scaling to fit and forces the label content to be limited to a single line</p>
 		*
 		* @property {int} minimumFontSize
 		*/
		minimumFontSize: undefined,

		/**
 		* <p>the text shadow color</p>
 		*
 		* @property {string} shadowColor
 		*/
		shadowColor: undefined,
		/**
 		* <p>the shadow offset as a dictionary with the properties <tt>x</tt> and <tt>y</tt></p>
 		*
 		* @property {object} shadowOffset
 		*/
		shadowOffset: undefined,

		/**
 		* <p>the text of the label</p>
 		*
 		* @property {string} text
 		*/
		text: undefined,
		/**
 		* <p>the alignment constant or string value such as <tt>left</tt>, <tt>center</tt> or <tt>right</tt></p>
 		*
 		* @property {string,int} textAlign
 		*/
		textAlign: undefined,
		/**
 		* <p>the key in the locale file to use for the text property</p>
 		*
 		* @property {string} textid
 		*/
		textid: undefined,

		/**
 		* <p>Turn on/off word wrapping in the label. (Android Only - default true)</p>
 		*
 		* @property {bool} wordWrap
 		*/
		wordWrap: {
			value: undefined,
			iphone: false
		},
		
		/**
		 * @override
		 */
		width: 'auto',
		
		/**
		 * @override
		 */
		height: 'auto'
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
		dlog('Label::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createLabel(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.Label.superclass.constructor.call(this);
	}
});
