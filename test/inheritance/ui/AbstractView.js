metal.ns('metal.ui.AbstractView');

/**
 * Base class for all Metal views
 * 
 * @abstract
 * @class AbstractView
 */
metal.ui.AbstractView = metal.extend(metal.core.Observable, {
    
    /**
     * The id of this view
     *
     * @private
     * @property {String} id
     */
    id: 'AbstractMetalView',
    
    framework: 'metal',
    
    type: 'AbstractView',
    
    /**
     * Holds all this view's properties
     *
     * @property {Object} properties
     */
    properties : {
	checking: true
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
      this.titaniumComponent.animate(obj, cb || function() {});
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
     * 
     * @method getType
     */
    getType: function() {
      return this.type;
    },
    
    /**
     * 
     * @method getFramework
     */
    getFramework: function() {
    	return this.framework;
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
     *
     * @method get
     * @param {String} name
     */
    get: function(name) {
        return this.properties[name];
    },
    /**
     *
     * @method set
     * @param {String or Object} nameOrObject
     * @param {Object} value
     */
    set: function(nameOrObject, value) {
        if (metal.isObject(nameOrObject)) {
          metal.apply(this, nameOrObject);
        } else {
          this.properties[nameOrObject] = value;
          // TODO [AbstractView::set] Need to set view properties in a better way
          // What about watching the properties object, and for any change, 
          // do it also on the native view
          this.titaniumComponent[nameOrObject] = metal.getView(value);
        }
    },
    
    /**
     * Titanium properties
     * 
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {
    	anchorPoint: {
    		type: 'object',
    		format: function() {} // TODO [AbstractView:titaniumProperties] This is where we set the different platform format
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
	 * Find if given name is a titanium property
	 * 
	 * @method isTitaniumProperty
	 * @param {String} name
	 */    
    isTitaniumProperty: function(name) {
    	return !!this.titaniumProperties[name];
    },
    
    // Problem: 
    // 1. How do i know if the property is inside properties or outside
    
    mySet: function(nameOrObject, value) {
    	if (metal.isObject(nameOrObject)) {
    		// Object
    		//metal.overrideClass(this, nameOrObject);
    		// TODO [AbstractView: mySet] Change all this to overrideClass when 
    		// overrideClass will not override but only apply
    		// In second thought, create a different apply function
    		// that doesn't override anything, and only apply new values
    		
    		for (var x in nameOrObject) {
    			if (nameOrObject.hasOwnProperty(x)) {
    				if (this.isTitaniumProperty(x)) {
    					this.titaniumComponent[x] = nameOrObject[x];
    				} 
					this.property[x] = nameOrObject[x];
    			}
    		}
    	} else {
    		// Name
    		if (this.isTitaniumProperty(nameOrObject)) {
				this.titaniumComponent[nameOrObject] = value;
			} 
			this.property[nameOrObject] = value;
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
            		//this.titaniumComponent.add(metal.getView(items[i]));
            	}
            }
        } else {
            //this.titaniumComponent.add(metal.getView(items));
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
