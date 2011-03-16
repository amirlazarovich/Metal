metal.ns('metal.ui.PickerRow');

/**
 * This class represents a PickerRow
 *
 * @class metal.ui.PickerRow
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.PickerRow = metal.extend(metal.ui.AbstractView, {

	/**
 	* The type of this component
 	*
 	* @private
 	* @property {String} type
 	*/
	type: 'MetalPickerRow',

	/**
 	* The PickerRow configuration properties
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
		id: 'MetalPickerRow_' + metal.generateId(),
		/**
 		* <p>when used in the constructor, set the row to selected on initial display</p>
 		*
 		* @property {boolean} selected
 		*/
		selected: undefined,

		/**
 		* <p>the display text</p>
 		*
 		* @property {string} title
 		*/
		title: undefined
	},

	/**
 	* The Titanium component this class wraps
 	*
 	* @property {Titanium.UI.PickerRow} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('PickerRow::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createPickerRow(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.PickerRow.superclass.constructor.call(this);
	}
});