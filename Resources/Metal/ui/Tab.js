metal.ns('metal.ui.Tab');

/**
 *
 * @class metal.ui.Tab
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.Tab = metal.extend(metal.ui.AbstractWindow, {

	type: 'MetalTab',

	/**
 	* Holds all this class's properties
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
		id: 'MetalTab_' + metal.generateId(),

		/**
 		* <p>the badge value for the tab group for this tab. null indicates no badge is value</p>
 		*
 		* @property {string} badge
 		*/
		badge: null,

		/**
 		* <p>the icon url for the tab group for this tab</p>
 		*
 		* @property {string} icon
 		*/
		icon: null,

		/**
 		* <p>the title for the tab group for this tab</p>
 		*
 		* @property {string} title
 		*/
		title: 'MetalTab',

		/**
 		* <p>the root level tab window. all tabs must have at least one root level tab window.</p>
 		*
 		* @property {object} window
 		*/
		window: {
			value: undefined,
			format: function() {
				return metal.getView(this.value);
			}
		}
	},

	/**
 	* The Titanium view this class wraps
 	*
 	* @property {Titanium.UI.Tab}
 	*/
	component: undefined,

	/**
 	* @constructor
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('Tab::' + this.get('id'), 'constructor');
		
		// Set Titanium component
		this.component = Ti.UI.createTab(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.Tab.superclass.constructor.call(this);
	},
	
	initEvents: function() {
		// Call parent
		metal.ui.Tab.superclass.initEvents.call(this);
		var me = this;
		
	},
	
	/**
 	* @override
 	* @method open
 	* @param {Titanium.UI.Window/metal.ui.Window} win
 	* @param [optional] {Object/metal.ui.Animation} animation
 	*/
	open: function(win, animation) {
		this.controller.openChild(this, win, animation);
	},
	
	/**
	 * Update data sent by other windows
	 * 
	 * @event update
	 * @param {Object} data
	 */
	update: function(data) {
		dlog('Tab:: ' + this.get('id'), 'updating data');
		// TODO [Tab::update] After creating Metal-events, change this to normal "this.on('update'...)"
		
		// pass the event to its wrapped window
		this.get('window').update(data);
	},
	
	/**
 	* @override
 	* @event beforeopen
 	* @param {Object} obj
 	*/
	beforeopen: function(obj) {
		dlog('Tab::' + this.get('id'), 'before open event');
		// Fire event on enclosing window
		var rtnValue = this.get('window').fire('beforeopen');
		return rtnValue || metal.ui.Tab.superclass.beforeopen(obj);
	},
	/**
 	* @override
 	* @event beforeclose
 	* @param {Object} obj
 	*/
	beforeclose: function(obj) {
		dlog('Tab::' + this.get('id'), 'before close event');
		// Fire event on enclosing window
		var rtnValue = this.get('window').fire('beforeclose');
		return rtnValue || metal.ui.Tab.superclass.beforeclose(obj);
	}
});
