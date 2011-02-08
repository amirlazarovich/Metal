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
    
    /**
     * The index of the starting tab
     * 
     * @property {Integer} startingTab
     */
    startingTab: 0,
    
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
      this.view.setActiveTab(indexOrObject);
    },
    
    /**
     * 
     * @ovverride
     * @method add
     * @param {[Array of] Titanium.UI.Tab} tabs
     */
    add: function(tabs) {
       if  (metal.isArray(tabs)) {
            for (var i in tabs) {
                if (tabs[i] == '[object TiUITab]') {
                    this.view.addTab(tabs[i]);
                } else {
                    this.view.addTab(tabs[i].getView());
                }
            }
        } else {
            if (tabs == '[object TiUITab]') {
                this.view.addTab(tabs);
            } else {
                this.view.addTab(tabs.getView());
            }
        }
    }
})
