metal.ns('metal.ui.Component');

/**
 * This class represents a UI metal wrapper component
 * It contains all the basic functionalities and properties that are common
 * for all metal UI components
 * 
 * @class metal.ui.Component
 * @author Amir Lazarovich
 * @version 0.1
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
     * The Titanium component this class wraps
     *
     * @property {Object} component
     */
    component: undefined,
	
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
        return !!this.properties.hasOwnProperty(name);
    },
    
    /**
     * Check if the titanium property should be copied 
     * to the metal object properties or not
     * 
     * @method isDiscarded
     * @param {String} name
     */
    isDiscarded: function(name) {
    	var prop = this.properties[name] || { discard: false };
    	return !!prop.discard;
    },
    
    /**
     *
     * @method get
     * @param {String} name
     */
    get: function(name) {
        if (this.isTitaniumProperty(name) && !this.isDiscarded(name)) {
        	var prop = this.properties[name];
        	if (prop.hasOwnProperty('value')) {
        		// The value of this property is nested inside an object
        		prop = prop.value;
        	}
            // Titanium property
            return prop;
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
    	return this.component;
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
				this.component[nameOrObject] = metal.getView(value);
			} 
			
			if (this.isDiscarded(nameOrObject)) {
				this[nameOrObject] = value;
			}
			else {
				this.properties[nameOrObject] = value;
			}
    	}
    }
});
