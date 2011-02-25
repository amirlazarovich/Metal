metal.ns('metal.ui.Tab');

/**
 *
 * @class Tab
 */
metal.ui.Tab = metal.extend(metal.ui.AbstractView, {

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
	    id: 'MetalTab',
	    
        title:'Metal Tab'
    },

    /**
     * The window this tab will show
     *
     * @property {metal.ui.AbstractView} window
     */
    window: undefined,

    /**
     * The Titanium view this class wraps
     *
     * @property {Titanium.UI.Tab}
     */
    titaniumComponent: undefined,

    /**
     * @constructor
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        dlog('Tab::' + this.get('id'), 'constructor');

        // Set Titanium component
        this.titaniumComponent = Ti.UI.createTab(this.properties);

        // Set enclosing window
        this.titaniumComponent.window = metal.getView(this.window);

        // Call parent constructor
        metal.ui.Tab.superclass.constructor.call(this);
    },
    
    /**
     * @override
     * @method open
     * @param {Titanium.UI.Window/metal.ui.Window} win
     * @param [optional] {Object/metal.ui.Animation} animation 
     */
    open: function(win, animation) {
    	this.titaniumComponent.open(metal.getView(win), animation);
    },
    
    /**
     * @override
     * @event beforeopen
     * @param {Object} obj
     */
    beforeopen: function(obj) {
        dlog('Tab::' + this.get('id'), 'before open event');
        // Fire event on enclosing window
        var rtnValue = this.window.fire('beforeopen');
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
        var rtnValue = this.window.fire('beforeclose');
        return rtnValue || metal.ui.Tab.superclass.beforeclose(obj);
    },
    /**
     * Titanium properties
     *
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {
        badge: {
            type: 'string'
        },
        icon: {
            type: 'string'
        },
        title: {
            type: 'string'
        },
        window: {
            type: 'object',
            discard: true // Don't copy this property to metal property
        }
    }
});
