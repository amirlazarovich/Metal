metal.ns('metal.ui.ImageView');

/**
 * An Image View is used to display an image or a series of images in an animation
 * 
 * @class metal.ui.ImageView
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.ImageView = metal.extend(metal.ui.AbstractView, {
	/**
	* @property {String} framework
	*/
	framework: 'metal',

	/**
	* @property {String} type
	*/
	type: 'MetalImageView',

	/**
	* Holds all this view's properties
	*
	* @property {Object} properties
	*/
	properties: {
		/**
 		* The id of this window
 		*
 		* @private
 		* @property {String} id
 		*/
		id: 'MetalImageView_' + metal.generateId(),
		
		/**
 		* <p>readonly boolean to indicate if the animation is animating</p>
 		*
 		* @property {boolean} animating
 		*/
		animating: false,
		/**
 		* <p>allow image to scale (Android)</p>
 		*
 		* @property {boolean} canScale
 		*/
		canScale: {
			value: undefined,
			iphone: false
		},
		/**
 		* <p>url to the default image to display while loading a remote image</p>
 		*
 		* @property {string} defaultImage
 		*/
		defaultImage: undefined,
		/**
 		* <p>amount of time in milliseconds to animate one cycle</p>
 		*
 		* @property {float} duration
 		*/
		duration: undefined,
		/**
 		* <p>enable zoom controls on Android. Default is true for backward compatibility. (1.3.0)</p>
 		*
 		* @property {boolean} enableZoomControls
 		*/
		enableZoomControls: {
			value: undefined,
			iphone: false
		},
		/**
 		* <p>indicates whether or not the source image is in 2x resolution for retina displays. Use for remote images ONLY. (iOS)</p>
 		*
 		* @property {boolean} hires
 		*/
		hires: {
			value: undefined,
			android: false
		},
		/**
 		* <p>image to display either as string url, Blob or File</p>
 		*
 		* @property {object} image
 		*/
		image: undefined,
		/**
 		* <p>array of images (either as string url, Blob or File) to display in an animation</p>
 		*
 		* @property {array} images
 		*/
		images: undefined,
		/**
 		* <p>readonly boolean to indicate if the animation is paused</p>
 		*
 		* @property {boolean} paused
 		*/
		paused: false,
		/**
 		* <p>boolean to indicate if the default image should be displaying while loading a remote image</p>
 		*
 		* @property {boolean} preventDefaultImage
 		*/
		preventDefaultImage: undefined,
		/**
 		* <p>number of times to repeat the image animation</p>
 		*
 		* @property {int} repeatCount
 		*/
		repeatCount: undefined,
		/**
 		* <p>boolean to indicate if the animation should happen in reverse (from last to first)</p>
 		*
 		* @property {boolean} reverse
 		*/
		reverse: false,
		/**
 		* <p>url to the image to display (NOTE: this property is deprecated. use image instead)</p>
 		*
 		* @property {string} url
 		*/
		url: undefined,
		
		/**
		 * @override
		 * @property {string, float} height
		 */
		height: 'auto',
		
		/**
		 * @override
		 * @property {string, float} width
		 */
		width: 'auto'
	},

	/**
	* The Titanium view this class wraps
	*
	* @property {Titanium.UI.ImageView} component
	*/
	component: undefined,
	
	/**
	* @constructor
	* @param {Object} config
	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('ImageView::' + this.get('id'), 'constructor');
		
		// Set Titanium component
		this.component = Ti.UI.createImageView(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.ImageView.superclass.constructor.call(this);
	},
	
	/**
	 * pause a started animation
	 * 
	 * @method pause	
	 */
	pause: function() {
		this.component.pause();
	},
	
	/**
	 * start the image animation. this method only works if you set multiple images
	 * 
	 * @method start
	 */
	start: function() {
		this.component.start();
	},
	
	/**
	 * stop a started animation and reset the index to the first image
	 * 
	 * @method stop
	 */
	stop: function() {
		this.component.stop();
	},
	
	/**
	 * return the image as a Blob object
	 * 
	 * @method toBlob
	 */
	toBlob: function() {
		return this.component.toBlob();
	}
});
