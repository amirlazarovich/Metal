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
 * @class Animation
 */
metal.ui.Animation = metal.extend(metal.core.Observable, {
	
	/**
	 * The animation configuration properties
	 * 
	 * @property {Object} properties
	 */
	properties: {
		//autoreverse
		//backgroundColor
		//bottom
		//center
		//color
		//curve
		//delay
		//duration
		//height
		//left
		//opacity
		//opaque
		//repeat
		//right
		//top
		//transform
		//transition
		//visible
		//width
		//zIndex
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
        metal.debug.info('Animation::' + this.id, 'constructor');

		// Set Titanium component
		this.titaniumComponent = Ti.UI.createAnimation(this.properties);
        
        this.initEvents();
        // Call parent constructor
        metal.ui.Animation.superclass.constructor.call(this);
	},
	
	/**
	 * @method getComponent
	 */
	getComponent: function() {
		return this.titaniumComponent;
	},
	
	/**
	 * @method getProperties
	 */
	getProperties: function() {
		return this.properties;
	},
	
	/**
	 * @method getCallback
	 */
	getCallback: function() {
		return this.callback;
	},
	
	/**
	 * @method get
	 * @param {String} name The name of the animation property you want to get
	 */
	get: function(name) {
		return this.properties[name];
	},
	
	/**
     *
     * @method initEvents
     */
    initEvents: function() {
        metal.debug.info('Animation::' + this.id, 'initEvents');
    }
});

