metal.ns('metal.ui');

/**
 *
 * @class metal.ui.ScrollView
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.ScrollView = metal.extend(metal.ui.AbstractView, {

	type: 'MetalScrollView',

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
		id: 'MetalScrollView_' + metal.generateId(),

		/**
 		* <p>(iPhone only) boolean to indicate if the scroll view can cancel subview touches in order to scroll instead. Default of true</p>
 		*
 		* @property {boolean} canCancelEvents
 		*/
		canCancelEvents: {
			value: true,
			android: false
		},

		/**
 		* <p>the height of the scrollable area</p>
 		*
 		* @property {float} contentHeight
 		*/
		contentHeight: undefined,
		/**
 		* <p>an object (with x and y properties) to indicate the offset of the content area</p>
 		*
 		* @property {object} contentOffset
 		*/
		contentOffset: undefined,
		/**
 		* <p>the width of the scrollable area</p>
 		*
 		* @property {float} contentWidth
 		*/
		contentWidth: undefined,
		/**
 		* <p>boolean to control bounce during scrolling</p>
 		*
 		* @property {boolean} disableBounce
 		*/
		disableBounce: undefined,

		/**
 		* <p>boolean to control the horizontal bounce during scrolling</p>
 		*
 		* @property {boolean} horizontalBounce
 		*/
		horizontalBounce: undefined,

		/**
 		* <p>the maximum scale of the content</p>
 		*
 		* @property {float} maxZoomScale
 		*/
		maxZoomScale: undefined,
		/**
 		* <p>the minimum scale of the content</p>
 		*
 		* @property {float} minZoomScale
 		*/
		minZoomScale: undefined,

		/**
 		* <p>(Android only) the type of ScrollView: "vertical" or "horizontal"</p>
 		*
 		* @property {string} scrollType
 		*/
		scrollType: {
			value: undefined,
			iphone: false
		},
		/**
 		* <p>boolean to indicate whether the horizontal scroll indicator is visible</p>
 		*
 		* @property {boolean} showHorizontalScrollIndicator
 		*/
		showHorizontalScrollIndicator: undefined,
		/**
 		* <p>boolean to indicate whether the vertical scroll indicator is visible</p>
 		*
 		* @property {boolean} showVerticalScrollIndicator
 		*/
		showVerticalScrollIndicator: undefined,

		/**
 		* <p>boolean to control the vertical bounce during scrolling</p>
 		*
 		* @property {boolean} verticalBounce
 		*/
		verticalBounce: undefined,
		/**
 		* <p>set the zoom scale for the current content area</p>
 		*
 		* @property {float} zoomScale
 		*/
		zoomScale: undefined
	},

	/**
 	* The Titanium view this class wraps
 	*
 	* @property {Titanium.UI.ScrollView} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('ScrollView::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createScrollView(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.ScrollView.superclass.constructor.call(this);
	},
	
	/**
	 * scrollTo a particular point
	 * 
	 * @method scrollTo
	 * @param {float} x
	 * @param {float} y
	 */
	scrollTo: function(x, y) {
		this.component.scrollTo(x, y);
	}
});
