metal.ns('metal.ui');

/**
 * This class represents a progress bar
 *
 * @class metal.ui.ProgressBar
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.ProgressBar = metal.extend(metal.ui.Component, {

	/**
 	* The type of this component
 	*
 	* @private
 	* @property {String} type
 	*/
	type: 'MetalProgressBar',

	/**
 	* The ProgressBar configuration properties
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
		id: 'MetalProgressBar_' + metal.generateId(),
		/**
	 	* <p>the color of the progress bar text</p>
	 	*
	 	* @property {string} color
	 	*/
		color: undefined,
		/**
	 	* <p>the font object for the progress bar text</p>
	 	*
	 	* @property {object} font
	 	*/
		font: undefined,
		/**
	 	* <p>the maximum value of the progress bar</p>
	 	*
	 	* @property {float} max
	 	*/
		max: undefined,
		/**
	 	* <p>the progress bar message</p>
	 	*
	 	* @property {string} message
	 	*/
		message: undefined,
		/**
	 	* <p>the minimum value of the progress bar</p>
	 	*
	 	* @property {float} min
	 	*/
		min: undefined,
		/**
	 	* <p>the style of the progress bar</p>
	 	*
	 	* @property {int} style
	 	*/
		style: undefined,
		/**
	 	* <p>the current value of the progress bar</p>
	 	*
	 	* @property {float} value
	 	*/
		value: undefined
	},

	/**
 	* The Titanium progress bar component this class wraps
 	*
 	* @property {Titanium.UI.ProgressBar} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('ProgressBar::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createProgressBar(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.ProgressBar.superclass.constructor.call(this);
	},
	
	/**
	 * @method getView
	 */
	getView: function() {
		return this.component;
	},
	
	/**
	 * @method show
	 */
	show: function() {
		this.component.show();
	},
	
	/**
	 * @method hide
	 */
	hide: function() {
		this.component.hide();
	}
});

