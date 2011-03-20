metal.ns('metal.ui.OptionDialog');

/**
 * The Option Dialog allows you to show a modal dialog of one or more options to the user
 * 
 * @class metal.ui.OptionDialog
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.OptionDialog = metal.extend(metal.ui.ControlledComponent, {
	/**
 	* @property {String} framework
 	*/
	framework: 'metal',

	/**
 	* @property {String} type
 	*/
	type: 'MetalOptionDialog',

	/**
 	* Holds all this view's properties
 	*
 	* @property {Object} properties
 	*/
	properties: {
		/**
 		* The id of this window
 		*
 		* @private
 		* @property {String} id
 		*/
		id: 'MetalOptionDialog_' + metal.generateId(),

		/**
 		* <p>A Titanium.UI.View. Allows for arbitrary contents inside a native dialog. Works for any dialog. (Android)</p>
 		*
 		* @property {object} androidView
 		*/
		androidView: {
			value: undefined,
			iphone: false
		},
		/**
 		* <p>an index to indicate which button should be the cancel button. If no button should be the cancel button, use -1. If there is a cancel button, it MUST be the last button for use on iPad.</p>
 		*
 		* @property {int} cancel
 		*/
		cancel: undefined,
		/**
 		* <p>the destructive button (indicated by a visual clue in the UI)</p>
 		*
 		* @property {int} destructive
 		*/
		destructive: undefined,
		/**
 		* <p>array of button names as strings</p>
 		*
 		* @property {array} options
 		*/
		options: undefined,
		/**
 		* <p>set an initially selected option. Only valid when options has been specified. (Android only)</p>
 		*
 		* @property {int} selectedIndex
 		*/
		selectedIndex: {
			value: undefined,
			iphone: false
		},
		/**
 		* <p>the title of the dialog</p>
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
 	* @property {Titanium.UI.OptionDialog} component
 	*/
	component: undefined,
	
	/**
	 * @event onclick
	 * 
	 * @param {Boolean} button Indicate that the index refers to a button on the dialog and not an item. (Android)
	 * @param {Integer} cancel The index of the cancel button
	 * @param {Integer} destructive The index of the destructive button
	 * @param {Integer} index The button index that was pressed
	 * @param {Object} source The source object that fired the event
	 * @param {String} type The name of the event fired
	 */
	onclick: undefined,
	
	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('OptionDialog::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createOptionDialog(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.OptionDialog.superclass.constructor.call(this);
	},
	
	/**
	 * cause the dialog to become visible
	 * 
	 * @method open
	 */
	open: function() {
		this.component.show();
	},
	
	/**
	 * @override
	 */
	initEvents: function() {
		// Call parent
		metal.ui.OptionDialog.superclass.initEvents.call(this);
		dlog('OptionDialog::' + this.get('id'), 'initEvents');
	}
});

// TODO [OptionDialog] Do we want to replace cancel/destructive properties with a simple color property?
