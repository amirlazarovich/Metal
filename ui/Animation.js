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
		id: 'MetalAnimation',
		/**
 		* <p>the property specifies if the animation should be replayed in reverse upon completion</p>
 		*
 		* @property {boolean} autoreverse
 		*/
		autoreverse: null,
		/**
 		* <p>value of the backgroundColor property to change during animation</p>
 		*
 		* @property {string} backgroundColor
 		*/
		backgroundColor: null,
		/**
 		* <p>value of the bottom property to change during animation</p>
 		*
 		* @property {float} bottom
 		*/
		bottom: null,
		/**
 		* <p>value of the center property to change during animation</p>
 		*
 		* @property {object} center
 		*/
		center: null,
		/**
 		* <p>value of the color property to change during animation</p>
 		*
 		* @property {string} color
 		*/
		color: null,
		/**
 		* <p>the curve of the animation</p>
 		*
 		* @property {int} curve
 		*/
		curve: null,
		/**
 		* <p>the duration of time in milliseconds before starting the animation</p>
 		*
 		* @property {float} delay
 		*/
		delay: null,
		/**
 		* <p>the duration of time in milliseconds to perform the animation</p>
 		*
 		* @property {float} duration
 		*/
		duration: null,
		/**
 		* <p>value of the height property to change during animation</p>
 		*
 		* @property {float} height
 		*/
		height: null,
		/**
 		* <p>value of the left property to change during animation</p>
 		*
 		* @property {float} left
 		*/
		left: null,
		/**
 		* <p>value of the opacity property to change during animation</p>
 		*
 		* @property {float} opacity
 		*/
		opacity: null,
		/**
 		* <p>value of the opaque property to change during animation</p>
 		*
 		* @property {boolean} opaque
 		*/
		opaque: null,
		/**
 		* <p>the number of times the animation should be performed</p>
 		*
 		* @property {int} repeat
 		*/
		repeat: null,
		/**
 		* <p>value of the right property to change during animation</p>
 		*
 		* @property {float} right
 		*/
		right: null,
		/**
 		* <p>value of the top property to change during animation</p>
 		*
 		* @property {float} top
 		*/
		top: null,
		/**
 		* <p>value of the transform property to change during animation</p>
 		*
 		* @property {object} transform
 		*/
		transform: null,
		/**
 		* <p>during a transition animation, this is the constant to the type of transition to use</p>
 		*
 		* @property {int} transition
 		*/
		transition: null,
		/**
 		* <p>value of the visible property to change during animation</p>
 		*
 		* @property {boolean} visible
 		*/
		visible: null,
		/**
 		* <p>value of the width property to change during animation</p>
 		*
 		* @property {float} width
 		*/
		width: null,
		/**
 		* <p>value of the zIndex property to change during animation</p>
 		*
 		* @property {int} zIndex
 		*/
		zIndex: null
	},

	/**
 	* The Titanium animation component this class wraps
 	*
 	* @property {Titanium.UI.Animation} component
 	*/
	component: undefined,

	/**
 	* The callback function that will be invoked after
 	* the animation is over
 	*
 	* @property [optional] {Function} callback
 	*/
	callback: function() {
	}, // TODO [Animation] Need to support this :)
	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('Animation::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createAnimation(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.Animation.superclass.constructor.call(this);
	},
	/**
 	*
 	* @method initEvents
 	*/
	initEvents: function() {
		dlog('Animation::' + this.get('id'), 'initEvents');
	}
});

