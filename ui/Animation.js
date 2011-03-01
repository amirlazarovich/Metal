metal.ns('metal.ui.Animation');

/**
 * This class represents an animation model which is used for 
 * any {metal.ui.AbstractView} animation
 * 
 * There are two ways of using this class: 
 * 1. Quick and dirty:
 * var anim = new metal.ui.Animation({
 * 		properties: { 
 * 			// Put here the native animation properties
 * 		},
 * 		
 * 		calback: function() {
 * 			// Animation complete...
 * 		}
 * });
 * 
 * 2. More options:
 * var anim = new metal.ui.Animation({
 * 		properties: { 
 * 			// Put here the native animation properties
 * 		},
 * 
 * 		initEvents: function() {
 *			this.on('start', function() {
 *				// Animation starting...
 *			});
 *					
 *			this.on('complete', function() {
 *				// Animation complete...
 *			});
 *		}
 * });
 * 
 * 
 * @class metal.ui.Animation
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.Animation = metal.extend(metal.ui.Component, {
	
	/**
	 * The type of this component
	 * 
	 * @private
	 * @property {String} type
	 */
	type: 'MetalAnimation',
	
	/**
	 * The animation configuration properties
	 * 
	 * @property {Object} properties
	 */
	properties: {
		/**
	     * The id of this component
	     *
	     * @private
	     * @property {String} id
	     */
		id: 'MetalAnimation'
	},
	
	/**
	 * The Titanium animation component this class wraps
	 * 
	 * @property {Titanium.UI.Animation} titaniumComponent
	 */
	titaniumComponent: undefined,
	
	/**
	 * The callback function that will be invoked after
	 * the animation is over
	 * 
	 * @property [optional] {Function} callback
	 */
	callback: function() {}, // TODO [Animation] Need to support this :)
	
	/**
	 * @constructor
	 * @param {Object} config
	 */
	constructor: function(config) {
		metal.overrideClass(this, config);
       	dlog('Animation::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.titaniumComponent = Ti.UI.createAnimation(this.properties);
        
        this.initEvents();
        // Call parent constructor
        metal.ui.Animation.superclass.constructor.call(this);
	},
	
	/**
     *
     * @method initEvents
     */
    initEvents: function() {
       dlog('Animation::' + this.get('id'), 'initEvents');
    },
    
    /**
     * Titanium properties
     *
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {
    	autoreverse: {
    		type: 'boolean'
    	},
    	backgroundColor: {
    		type: 'string'
    	},
		bottom: {
			type: 'float'
		},
		center: {
			type: 'object'
		},
		
		color: {
			type: 'string'
		},
		curve: {
			type: 'int'
		},
		delay: {
			type: 'float'
		},
		duration: {
			type: 'float'
		},
		height: {
			type: 'float'
		},
		left: {
			type: 'float'
		},
		opacity: {
			type: 'float'
		},
		opaque: {
			type: 'float'
		},
		repeat: { 
			type: 'int'
		},
		right: {
			type: 'float'
		},
		top: {
			type: 'float'
		},
		transform: {
			type: 'object'
		},
		transition: {
			type: 'int'
		},
		visible: {
			type: 'boolean'
		},
		width: {
			type: 'float'
		},
		zIndex: {
			type: 'int'
		}
    }
});

