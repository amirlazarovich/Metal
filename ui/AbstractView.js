metal.ns('metal.ui.AbstractView');

/**
 * Base class for all Metal views
 *
 * @abstract
 * @class AbstractView
 */
metal.ui.AbstractView = metal.extend(metal.ui.Component, {

    /**
     * The id of this view
     *
     * @private
     * @property {String} id
     */
    id: 'AbstractMetalView',
	
	/**
	 * @property {String} framework
	 */
    framework: 'metal',

	/**
	 * @property {String} type
	 */
    type: 'AbstractMetalView',

    /**
     * Holds all this view's properties
     *
     * @property {Object} properties
     */
    properties : {

    },

    /**
     * The animation set on this view
     *
     * @properties {metal.model.Animation} animation
     */
    animation: null,

    /**
     * The Titanium view this class wraps
     *
     * @property {Titanium.UI.View} titaniumComponent
     */
    titaniumComponent: undefined,

    /**
     * The views associated with this class
     *
     * @property {Titanium.UI.View / metal.ui.AbstractView} items
     */
    items: [],

    /**
     * This view's controller
     *
     * @property {metal.core.control} controller
     */
    controller: undefined,

    /**
     * @constructor
     * @param {Object} config
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        metal.debug.info('AbstractView::' + this.id, 'constructor');

        // Add bidirectional association
        this.controller = metal.control.add(this.id, this);

        // If any tabs were sent, add them now
        this.add(this.items);

        this.initComponents();
        this.initEvents();
        this.initAnimation();

        // Call parent constructor
        metal.ui.AbstractView.superclass.constructor.call(this);
    },
    /**
     *
     * @method animate
     * @param {Object} obj
     * @param {Function} cb
     */
    animate: function(obj, cb) {
        this.titaniumComponent.animate(obj, cb ||
        function() {
        });

    },
    /**
     *
     * @method getView
     */
    getView: function() {
        return this.titaniumComponent;
    },
    /**
     *
     * @method getItems
     */
    getItems: function() {
        return this.items;
    },
    /**
     *
     * @method getItem
     */
    getItem: function(indexOrObject) {
        if (metal.isObject(indexOrObject)) {
            for (var i = 0, iln = this.items.length; i < iln; i++) {
                if (this.items[i] === indexOrObject) {
                    return this.items[i];
                }
            }
        } else {
            return this.items[indexOrObject];
        }
    },
    /**
     * @method getAnimation
     * @param {String} type
     */
    getAnimation: function(type) {
        var animation;
        type = type || '';
        if (type == 'titanium') {
            // Getting the titanium component
            animation = this.animation.getComponent();
        } else {
            //  Getting the metal component
            animation = this.animation;
        }
        return animation;
    },
    
    /**
     * Titanium properties
     *
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {
        anchorPoint: {
            type: 'object',
            format: function() {
            } // TODO [AbstractView:titaniumProperties] This is where we set the different platform format
        },
        animatedCenterPoint: {
            type: 'object'
        },
        backgroundDisabledColor: {
            type: 'string'
        },
        backgroundDisabledImage: {
            type: 'string'
        },
        backgroundFocusedColor: {
            type: 'string'
        },
        backgroundFocusedImage: {
            type: 'string'
        },
        backgroundGradient: {
            type: 'object'
        },
        backgroundImage: {
            type: 'string'
        },
        backgroundLeftCap: {
            type: 'float'
        },
        backgroundSelectedColor: {
            type: 'string'
        },
        backgroundSelectedImage: {
            type: 'string'
        },
        backgroundTopCap: {
            type: 'float'
        },
        borderColor: {
            type: 'string'
        },
        borderRadius: {
            type: 'float'
        },
        borderWidth: {
            type: 'float'
        },
        bottom: {
            type: 'float,string'
        },
        center: {
            type: 'object'
        },
        focusable: {
            type: 'boolean'
        },
        fontFamily: {
            type: 'string'
        },
        fontSize: {
            type: 'string'
        },
        fontStyle: {
            type: 'string'
        },
        fontWeight: {
            type: 'string'
        },
        height: {
            type: 'float,string'
        },
        left: {
            type: 'float,string'
        },
        opacity: {
            type: 'float'
        },
        right: {
            type: 'float,string'
        },
        size: {
            type: 'object'
        },
        softKeyboardOnFocus: {
            type: 'int'
        },
        top: {
            type: 'float,string'
        },
        touchEnabled: {
            type: 'boolean'
        },
        transform: {
            type: 'object'
        },
        visible: {
            type: 'boolean'
        },
        width: {
            type: 'float,string'
        },
        zIndex: {
            type: 'int'
        }
    },

    /**
     *
     * @method add
     * @param {[Array of] Titanium.UI.View or metal.ui.AbstractView} items
     */
    add: function(items) {
        if (metal.isArray(items)) {
            for (var i in items) {
                if (items.hasOwnProperty(i)) {
                    this.titaniumComponent.add(metal.getView(items[i]));
                }
            }
        } else {
            this.titaniumComponent.add(metal.getView(items));
        }
    },
    /**
     *
     * @method setToolbar
     * @param {[Array of] Titanium.UI.View or metal.ui.AbstractView} items
     */
    setToolbar: function(items) {
        if (metal.isArray(items)) {
            var toolbar = [];
            for (var i in items) {
                if (items.hasOwnProperty(i)) {
                    toolbar.push(metal.getView(items[i]));
                }
            }
            this.titaniumComponent.setToolbar(toolbar);
        } else {
            this.titaniumComponent.setToolbar(metal.getView(items));
        }
    },
    /**
     *
     * @method open
     */
    open: function() {
        this.titaniumComponent.open();
    },
    /**
     *
     * @method remove
     * @param {Titanium.UI.View or metal.ui.AbstractView} item
     */
    remove: function(item) {
        this.titaniumComponent.remove(metal.getView(item));
    },
    /**
     * Hide this window
     *
     * @method hide
     */
    hide: function() {
        this.titaniumComponent.hide();
    },
    /**
     * Close this window
     *
     * @method close
     */
    close: function() {
        this.titaniumComponent.close();
    },
    /**
     *
     * @method initComponents
     */
    initComponents: function() {
        metal.debug.info('AbstractView::' + this.id, 'initComponents');
    },
    /**
     *
     * @method initEvents
     */
    initEvents: function() {
        metal.debug.info('AbstractView::' + this.id, 'initEvents');
    },
    /**
     *
     * @method initAnimation
     */
    initAnimation: function() {
        metal.debug.info('AbstractView::' + this.id, 'initAnimation');
        var animation = this.getAnimation();
        if (animation != null) {
            // Animation is set on this view
            this.animate(animation.getComponent());
        }
    },
    /**
     *
     * @event beforeopen
     * @param {Object} obj
     */
    beforeopen: function(obj) {
        metal.debug.info('AbstractView::' + this.id, 'before open event');
        return true;
    },
    /**
     *
     * @event beforeclose
     * @param {Object} obj
     */
    beforeclose: function(obj) {
        metal.debug.info('AbstractView::' + this.id, 'before close event');
        return true;
    }
});
