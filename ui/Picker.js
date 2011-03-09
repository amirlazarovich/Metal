metal.ns('metal.ui.Picker');

/**
 * This class represents a Picker
 *
 * @class metal.ui.Picker
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.Picker = metal.extend(metal.ui.AbstractView, {

	/**
 	* The type of this component
 	*
 	* @private
 	* @property {String} type
 	*/
	type: 'MetalPicker',

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
		id: 'MetalPicker',

		/**
 		* <p>array of column values</p>
 		*
 		* @property {array} columns
 		*/
		columns: [],
		/**
 		* <p>the duration value in milliseconds for count down timer pickers. (Note that Titanium's Android implementation does not support the countdown timer.)</p>
 		*
 		* @property {double} countDownDuration
 		*/
		countDownDuration: undefined,
		/**
 		* <p>the locale used for displaying Date/Time pickers values</p>
 		*
 		* @property {string} locale
 		*/
		locale: undefined,
		/**
 		* <p>the minimum Date/Time for value for date pickers</p>
 		*
 		* @property {date} minDate
 		*/
		minDate: undefined,
		/**
 		* <p>property to set the interval displayed by the minutes wheel (for example, 15 minutes). The interval value must be evenly divided into 60; if it is not, the default value is used. The default and minimum values are 1; the maximum value is 30. (Not currently supported on Android.)</p>
 		*
 		* @property {int} minuteInterval
 		*/
		minuteInterval: {
			value: undefined,
			android: false
		},
		/**
 		* <p>for basic picker, boolean value to indicate whether the visual selection style is shown. On the iPhone, this is a blue selected bar.</p>
 		*
 		* @property {boolean} selectionIndicator
 		*/
		selectionIndicator: undefined,
		/**
 		* <p>the type constant for the picker. One of 
 		* <a href="Titanium.UI.PICKER_TYPE_PLAIN-property.html">Titanium.UI.PICKER_TYPE_PLAIN</a> (default), 
 		* <a href="Titanium.UI.PICKER_TYPE_DATE_AND_TIME-property.html">Titanium.UI.PICKER_TYPE_DATE_AND_TIME</a>, 
 		* <a href="Titanium.UI.PICKER_TYPE_DATE-property.html">Titanium.UI.PICKER_TYPE_DATE</a>, 
 		* <a href="Titanium.UI.PICKER_TYPE_TIME-property.html">Titanium.UI.PICKER_TYPE_TIME</a> or 
 		* <a href="Titanium.UI.PICKER_TYPE_COUNT_DOWN_TIMER-property.html">Titanium.UI.PICKER_TYPE_COUNT_DOWN_TIMER</a>. 
 		* (Note that Titanium's Android implementation does not support the countdown timer or date+time varieties.)</p>
 		*
 		* @property {int} type
 		*/
		type: -1,
		/**
 		* <p>(Android only, default false.) An indicator that you wish to use a non-native Android control that looks and behaves more like the iOS picker in the sense that the user selects values by spinning a wheel. (The native Android spinner is more like a conventional "dropdown".) Note that this option works both plain pickers, date pickers and time pickers. Set it preferably immediately when creating the picker, i.e., <a href="Titanium.UI.createPicker({useSpinner:true});.html">Titanium.UI.createPicker({useSpinner:true});</a>, but definitely before <tt>.add()</tt>ing the picker to its parent.</p>
 		*
 		* @property {boolean} useSpinner
 		*/
		useSpinner: {
			value: undefined,
			iphone: false
		},
		/**
 		* <p>the Date/Time value for date pickers</p>
 		*
 		* @property {date} value
 		*/
		value: null,
		/**
 		* <p>(Android only.) This is relevant only if you set <tt>useSpinner</tt> to <tt>true</tt>, and it is relevant only for the plain picker (not date/time). By default, the spinner-style Android picker will show 5 rows: the one in the middle which is selected, and then 2 above and below. You can set this to allow more (use an odd number to be sure the selected row is in the middle.)</p>
 		*
 		* @property {int} visibleItems
 		*/
		visibleItems: undefined
	},

	/**
 	* The Titanium component this class wraps
 	*
 	* @property {Titanium.UI.Picker} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('Picker::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createPicker(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.Picker.superclass.constructor.call(this);
	},
	/**
 	* Add an array of rows, a single row or a column to the picker
 	*
 	* @method add
 	* @param {Array/Object} items
 	*/
	add: function(items) {
		if (metal.isArray(items)) {
			// Array
			for (var i = 0, iln = items.length; i < iln; i++) {
				this.component.add(metal.getView(items[i]));
				this.items.push(items[i]);
			}
		} else if (metal.isObject(items)){
			// Object
			this.component.add(metal.getView(items));
			this.items.push(items);
		}
	},
	/**
 	* Get the selected row object for column
 	*
 	* @method getSelectedRow
 	* @param {Integer} index For the column index
 	* @return {Object} row object or null if not found
 	*/
	getSelectedRow: function(index) {
		this.component.getSelectedRow(index);
	},
	/**
 	* Causes the picker to reload the values from the new column
 	*
 	* @method reloadColumn
 	* @param {Object} column New column to load
 	*/
	reloadColumn: function(column) {
		this.component.reloadColumn(column);
	},
	/**
 	* Set the column's row to the selected state
 	*
 	* @method setSelectedRow
 	* @param {Integer} columnIndex The column index
 	* @param {Integer} rowIndex The row index
 	* @param {Boolean} animated Indicate if the selection should be animated
 	*/
	setSelectedRow: function(columnIndex, rowIndex, animated) {
		this.component.setSelectedRow(columnIndex, rowIndex, animated);
	}
});
