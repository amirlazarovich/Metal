metal.ns('metal.widget.Message');

/**
 * This class main puporse is to display the user a short message on screen
 * 
 * @class metal.widget.Message
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.widget.Message = metal.extend(metal.ui.AbstractWindow, {
	type: 'MetalMessage',

	/**
 	* Holds all this view's properties
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
		id: 'MetalMessage_' + metal.generateId(),
		
		/**
		 * @override
		 */
		backgroundColor: 'black',
		
		/**
		 * @override
		 */
		opacity: 0,
		
		/**
		 * @override
		 */
		bottom: 110,
		
		/**
		 * @override
		 */
		borderRadius: 10,
		
		/**
		 * @override
		 * @important
		 */
		fullscreen: false

	},

	/**
 	* The Titanium view this class wraps
 	*
 	* @property {Titanium.UI.Window} component
 	*/
	component: undefined,
	
	/**
	 * The message itself
	 * 
	 * @property {Titanium.UI.Label} label
	 */
	label: undefined,
	
	/**
	 * The padding, vertically/horizontally
	 * 
	 * @property {Integer} padding
	 */
	padding: 20,
	
	/**
	 * The starting animation that will be applied on this message 
	 * 
	 * @property {Object} startAnimation 
	 */
	startAnimation: {
		opacity: 0.8,
		duration: 250
	},
	
	/**
	 * The ending animation that will be applied on this message 
	 * 
	 * @property {Object} endAnimation 
	 */
	endAnimation: {
		opacity:0,
		duration:500
	},
	
	/**
	 * How much time (in milliseconds) before closing this message
	 * 
	 * @property {Integer} duration
	 */
	duration: 1e3, // one second
	
	/**
 	* @constructor
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('Message::' + this.get('id'), 'constructor');
		
		// Set default values (do not override existing ones)
		metal.sapply(config, {
			color: 'white',
			font:{fontFamily:'Helvetica Neue', fontSize:14,fontWeight:'normal'}
		});
		
		// Set Titanium components
		this.label = Ti.UI.createLabel(config);
		this.component = Ti.UI.createWindow(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.widget.Message.superclass.constructor.call(this);
	},
	
	/**
	 * @override
	 */
	open: function(animation) {
		this.component.open(animation);
	},
	
	/**
	 * @override
	 */
	close: function(animation) {
		this.component.close(animation);
	},
	
	/**
	 * @override
	 */
	initComponents: function() {
		// Call parent
		metal.widget.Message.superclass.initComponents.call(this);
		
		var blob = this.label.toImage();
		var height = blob.height;
		var width = blob.width;
		this.set('height', height + this.padding);
		this.set('width', width + this.padding);
		
		// Center label
		this.label.left = this.padding / 2;
		
		this.add(this.label);
	},
	
	/**
	 * @override
	 */
	initEvents: function() {
		// Override this function and do nothing (we don't want to notify metal.control anything)
	},
	
	/**
	 * @method show
	 * @param [optional] {Object} configOrCallback 
	 * 							  config: Additional/overrides configuration. May use: startAnimation, endAnimation, duration
	 * 						   or callback: a callback function for after closing
	 */
	show: function(configOrCallback) {
		var config = {};
		var cb = function() {};
		var me = this;
		
		// Set the configuration and callback function
		if (metal.isFunction(configOrCallback)) {
			cb = configOrCallback;
		} else if (metal.isObject(configOrCallback)) {
			config = configOrCallback;
		}
		
		// Set the closing event duration
		var duration = config.duration || this.duration;
		
		// Define/Set animations
		var startAnimation = config.startAnimation || this.startAnimation;
		var endAnimation = config.endAnimation || this.endAnimation;
		
		// Show window
		this.open(startAnimation);
		
		// Close window
		setTimeout(function() {
			me.close(endAnimation);
			// invoke the callback function with this message's closure
			cb.call(me);
		}, duration); 
	}
});
