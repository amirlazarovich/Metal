metal.ns('metal.ui.Component');

/**
 * This class represents a UI metal wrapper component
 * It contains all the basic functionalities and properties that are common
 * for all metal UI components
 * 
 * @class metal.ui.Component
 */
metal.ui.Component = metal.extend(metal.core.Observable, {
	
	/**
     * The id of this component
     *
     * @private
     * @property {String} id
     */
    id: 'MetalComponent',
	
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
    properties : {},
    
    /**
     * A list of all available Titanium properties
     *
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {},
	
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
        metal.debug.info('Component::' + this.id, 'constructor');
        
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
				this.titaniumComponent[nameOrObject] = value;
			} 
			this.property[nameOrObject] = value;
    	}
    }
});
