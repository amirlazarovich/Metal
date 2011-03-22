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
	    id: 'MetalControlledComponent_' + metal.generateId(),
	    
	    /**
 		* property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
 		*
 		* @property {float,string} width
 		*/
		width: metal.width,

		/**
 		* property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
 		*
 		* @property {float,string} height
 		*/
		height: {
			value: '100%',
			format: function() {
				if (metal.osname == 'android') {
					return 'auto';
				} else {
					return this.value;
				}
			}
		},

		/**
 		* property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
 		*
 		* @property {float,string} bottom
 		*/
		bottom: undefined,
		/**
 		* property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
 		*
 		* @property {float,string} top
 		*/
		top: undefined,
		/**
 		* property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
 		*
 		* @property {float,string} left
 		*/
		left: undefined,

		/**
 		* property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
 		*
 		* @property {float,string} right
 		*/
		right: undefined,
		/**
 		* the opacity from 0.0-1.0
 		*
 		* @property {float} opacity
 		*/
		opacity: undefined
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
