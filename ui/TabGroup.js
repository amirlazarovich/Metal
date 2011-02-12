metal.ns('metal.ui.TabGroup');


/**
 * 
 * @class TabGroup
 */
metal.ui.TabGroup = metal.extend(metal.ui.AbstractMetalView, {
  
    /**
     * The id of this window
     * 
     * @private
     * @property {String} id
     */
    id: 'MetalTabGroup',
    
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
    	
    },
    
    /**
     * The native view this class wraps
     * 
     * @property {Titanium.UI.TabGroup}
     */
    view: undefined,
    
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
        metal.debug.info('TabGroup::' + this.id, 'constructor');
        
        // Set native component
        this.view = Ti.UI.createTabGroup(this.properties);
        
        // Call parent constructor
        metal.ui.TabGroup.superclass.constructor.call(this);
        
        // Set active tab
        this.setActiveTab(this.startingTab);
    },
    
   
    
    /**
     * 
     * @method setActiveTab
     * @param {Integer / Object} indexOrObject
     */
    setActiveTab: function(indexOrObject) {
      	this.view.setActiveTab(indexOrObject);
    },
    
    /**
     * 
     * @ovverride
     * @method add
     * @param {[Array of] Titanium.UI.Tab} items
     */
    add: function(items) {
       if  (metal.isArray(items)) {
            for (var i in items) {
				this.addTab(items[i]);
            }
        } else if (items){
			this.addTab(items);
        }
    },
    
    /**
     * Add a tab component to the tabgroup
     * @method addTab
     * @param {[Array<Titanium.UI.Tab/Metal.ui.AbstractMetalView>]} tab
     */
    addTab: function(tab){
    	// Check if it is a TiUITab
        if (tab == '[object TiUITab]') {
        	metal.debug.info('Instance of this');
            this.view.addTab(tab);
            
        // See if it is a Metal.ui.Tab
        } else if (tab instanceof metal.ui.Tab) {
        	metal.debug.info('Instance of tab');
            this.view.addTab(tab.getView());
            
        // Create a new tab component
        } else {
        	metal.debug.info('Create tab');
        	var ntab = new metal.ui.Tab({
        		id: tab.id + 'tab',
        		properties: {
        			title: tab.title || '',
        			icon: tab.icon || null,
        			window: tab.getView()
        		}
        	});
        	//tab.tab = ntab;
        	this.view.addTab(ntab.getView());
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
