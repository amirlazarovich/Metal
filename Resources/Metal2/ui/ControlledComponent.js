metal.ns('metal.ui.ControlledComponent');

/**
 * This class acts the same as metal.ui.Component with only one 
 * difference:
 * This class has a controller (metal.core.control)
 * 
 * @class metal.ui.ControlledComponent
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.ControlledComponent = metal.extend(metal.ui.Component, {
	
	/**
	 * @property {String} framework
	 */
    framework: 'metal',

	/**
	 * @property {String} type
	 */
    type: 'MetalControlledComponent',
	
	/**
     * Holds all this ControlledComponent's properties
     *
     * @property {Object} properties
     */
    properties : {
    	/**
	     * The id of this ControlledComponent
	     *
	     * @private
	     * @property {String} id
	     */
	    id: 'MetalControlledComponent_' + metal.generateId()
    },
    
	/**
	* This ControlledComponent's controller
	*
	* @property {metal.core.control} controller
	*/
	controller: undefined,
	
	/*
	 * @constructor 
	 */
	constructor: function(config) {
		metal.overrideClass(this, config);
        dlog('ControlledComponent::' + this.get('id'), 'constructor');
        
        // Add bidirectional association
		this.controller = metal.control.add(this.get('id'), this);
        
        // Call parent
        metal.ui.ControlledComponent.superclass.constructor.call(this);
	}
});
