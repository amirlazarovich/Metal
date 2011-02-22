metal.ns('metal.ui.TabGroup');

/**
 *
 * @class TabGroup
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
	    id: 'MetalTabGroup'
    },

    /**
     * The Titanium view this class wraps
     *
     * @property {Titanium.UI.TabGroup} titaniumComponent
     */
    titaniumComponent: undefined,

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
        metal.debug.info('TabGroup::' + this.get('id'), 'constructor');

        // Set Titanium component
        this.titaniumComponent = Ti.UI.createTabGroup(this.properties);

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
        this.titaniumComponent.setActiveTab(indexOrObject);
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
    this.titaniumComponent.addTab(metal.getView(tabs[i]));
    }
    }
    } else {
    this.titaniumComponent.addTab(metal.getView(tabs));
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
            metal.debug.info('Instance of this');
            this.titaniumComponent.addTab(tab);

            // See if it is a Metal.ui.Tab
        } else if (tab instanceof metal.ui.Tab) {
            metal.debug.info('Instance of tab');
            this.titaniumComponent.addTab(tab.getView());

            // Create a new tab component
        } else {
            metal.debug.info('Create tab');
            var ntab = new metal.ui.Tab({
                id: tab.id + 'tab',
                window: tab.getView(),
                properties: {
                    title: tab.get('title') || '',
                    icon: tab.get('icon') || null
                }
            });
            //tab.tab = ntab;
            this.titaniumComponent.addTab(ntab.getView());
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
    },
    /**
     * Titanium properties
     *
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {
        activeTab: {
            type: 'object'
        },
        allowUserCustomization: {
            type: 'boolean',
            iosOnly: true
        },
        barColor: {
            type: 'string'
        },
        editButtonTitle: {
            type: 'string'
        },
        tabs: {
            type: 'array'
        }
    }
});
