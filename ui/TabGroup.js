metal.ns('metal.ui.TabGroup');

/**
 *
 * @class metal.ui.TabGroup
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.TabGroup = metal.extend(metal.ui.AbstractView, {

	type: 'MetalTabGroup',

	/**
 	* The index of the starting tab
 	*
 	* @property {Integer} startingTab
 	*/
	startingTab: 0,

	/**
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
		id: 'MetalTabGroup',

		/**
 		* <p>the active tab</p>
 		*
 		* @property {object} activeTab
 		*/
		activeTab: undefined,
		/**
 		* <p>whether or not the user can configure the tab group via the 'More' tab's edit functionality. iPhone/iPad only</p>
 		*
 		* @property {boolean} allowUserCustomization
 		*/
		allowUserCustomization: {
			value: true,
			android: false
		},

		/**
 		* <p>the default navigation bar color (typically for the "More" tab)</p>
 		*
 		* @property {string} barColor
 		*/
		barColor: undefined,

		/**
 		* <p>the title for the 'More' tab edit button. iPhone/iPad only</p>
 		*
 		* @property {string} editButtonTitle
 		*/
		editButtonTitle: undefined,

		/**
 		* <p>array of tab objects that are managed by the tab group</p>
 		*
 		* @property {array} tabs
 		*/
		tabs: undefined,
		
		/**
		 * @override
		 */
		width: metal.width,
		
		/**
		 * @override
		 */
		height: metal.height - 20
	},

	/**
 	* The Titanium view this class wraps
 	*
 	* @property {Titanium.UI.TabGroup} component
 	*/
	component: undefined,

	/**
 	* The tab items this class holds
 	*
 	* @property {Titanium.UI.Tab[] / metal.ui.Tab[]} items
 	*/
	items: [],

	/**
 	* @constructor
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('TabGroup::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createTabGroup(metal.formatProperties(this.properties));

		// Set active tab
		this.setActiveTab(this.startingTab);

		// Call parent constructor
		metal.ui.TabGroup.superclass.constructor.call(this);
	},
	/**
 	*
 	* @method setActiveTab
 	* @param {Integer / Object} indexOrObject
 	*/
	setActiveTab: function(indexOrObject) {
		this.component.setActiveTab(indexOrObject);
	},
	/**
 	*
 	* @ovverride
 	* @method add
 	* @param {[Array of] Titanium.UI.Tab} tabs
 	*/
	/*
	add: function(tabs) {
	if  (metal.isArray(tabs)) {
	for (var i in tabs) {
	if (tabs.hasOwnProperty(i)) {
	this.component.addTab(metal.getView(tabs[i]));
	}
	}
	} else {
	this.component.addTab(metal.getView(tabs));
	}
	},
	*/

	/**
 	*
 	* @ovverride
 	* @method add
 	* @param {[Array of] Titanium.UI.Tab} items
 	*/
	add: function(items) {
		if  (metal.isArray(items)) {
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					this.addTab(items[i]);
				}
			}
		} else if (items) {
			this.addTab(items);
		}
	},
	/**
 	* Add a tab component to the tabgroup
 	* @method addTab
 	* @param {[Array<Titanium.UI.Tab/Metal.ui.AbstractMetalView>]} tab
 	*/
	addTab: function(tab) {
		// Check if it is a TiUITab
		if (tab == '[object TiUITab]') {
			dlog('Instance of this');
			this.component.addTab(tab);

			// See if it is a Metal.ui.Tab
		} else if (tab instanceof metal.ui.Tab) {
			dlog('Instance of tab');
			this.component.addTab(tab.getView());

			// Create a new tab component
		} else {
			dlog('Create tab');
			var ntab = new metal.ui.Tab({
				id: tab.get('id') + '_tab',
				window: tab,
				properties: {
					title: tab.get('title') || '',
					icon: tab.get('icon') || null
				}
			});
			//tab.tab = ntab;
			this.component.addTab(ntab.getView());
		}
	},
	/**
 	*
 	* @override
 	* @method initEvents
 	*/
	initEvents: function() {
		var me = this;
		// Call parent
		metal.ui.TabGroup.superclass.initEvents.call(me);

		// Initialize focus event only after the tab group is opened
		// why? well because Titanium fires too many dummy focus events...
		me.on('open', function() {

			// Get next view (which is the starting view)
			var nextView = me.getItem(me.startingTab);

			// Notify the control
			metal.control.setActiveTab(nextView);

			// Set tab group focus event
			me.on('focus', function(e) {

				// Get next view
				nextView = me.getItem(e.index);

				// Notify the control
				metal.control.setActiveTab(nextView);
			});
		});
	}
});
