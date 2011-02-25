metal.ns('metal.ui.Component');

/**
 * This class represents a UI metal wrapper component
 * It contains all the basic functionalities and properties that are common
 * for all metal UI components
 * 
 * @class metal.ui.Component
 */
metal.ui.Component = metal.extend(metal.util.Observable, {
	
	/**
	 * @property {String} framework
	 */
    framework: 'metal',

	/**
	 * @property {String} type
	 */
    type: 'MetalComponent',
	
	/**
     * The properties assigned to the Titanium component
     *
     * @property {Object} properties
     */
    properties : {
    	/**
	     * The id of this component
	     *
	     * @private
	     * @property {String} id
	     */
	    id: 'MetalComponent'
    },
    
    /**
     * A list of all available Titanium properties
     *
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {
    	id: {
    		type: 'string'
    	},
    	className: {
    		type: 'string'
    	},
    	classNames: {
    		type: 'array'
    	}
    },
	
	/**
     * The Titanium view this class wraps
     *
     * @property {Titanium.UI.View} titaniumComponent
     */
    titaniumComponent: undefined,
	
	/*
	 * @constructor 
	 */
	constructor: function(config) {
		metal.overrideClass(this, config);
        dlog('Component::' + this.get('id'), 'constructor');
        
        // Call parent
        metal.ui.Component.superclass.constructor.call(this);
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
     * Find if given name is a titanium property
     *
     * @method isTitaniumProperty
     * @param {String} name
     */
    isTitaniumProperty: function(name) {
        return !!this.titaniumProperties[name];
    },
    
    /**
     * Check if the titanium property should be copied 
     * to the metal object properties or not
     * 
     * @method isDiscarded
     * @param {String} name
     */
    isDiscarded: function(name) {
    	var prop = this.titaniumProperties[name] || {};
    	return !!prop.discard;
    },
    
    /**
     *
     * @method get
     * @param {String} name
     */
    get: function(name) {
        if (this.isTitaniumProperty(name)) {
            // Titanium property
            return this.properties[name];
        } else {
            // Metal property
            return this[name];
        }
    },
    
    /**
     * Get the titanium Component
     * 
     * @method getComponent
     */
    getComponent: function() {
    	return this.titaniumComponent;
    },
    
    /**
     *
     * @method set
     * @param {String or Object} nameOrObject
     * @param {Object} value
     */
    set: function(nameOrObject, value) {
    	if (metal.isObject(nameOrObject)) {
    		// Object
    		metal.overrideClass(this, nameOrObject);
    	} else {
    		// Name
    		if (this.isTitaniumProperty(nameOrObject)) {
				this.titaniumComponent[nameOrObject] = metal.getView(value);
			} 
			this.properties[nameOrObject] = value;
    	}
    }
});
