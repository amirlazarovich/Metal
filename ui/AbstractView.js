metal.ns('metal.ui.AbstractView');

/**
 * Base class for all Metal views
 *
 * @abstract
 * @class metal.ui.AbstractView
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.AbstractView = metal.extend(metal.ui.Component, (function() {

	return {

		/**
 		* @property {String} framework
 		*/
		framework: 'metal',

		/**
 		* @property {String} type
 		*/
		type: 'AbstractMetalView',

		/**
 		* Holds all this view's properties
 		*
 		* @property {Object} properties
 		*/
		properties: {
			/**
 			* The id of this view
 			*
 			* @private
 			* @property {String} id
 			*/
			id: 'AbstractMetalView',
			/**
 			* a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
 			*
 			* @property {object} anchorPoint
 			*/
			anchorPoint: undefined,
			/**
 			* read-only object with x and y properties of where the view is during animation
 			*
 			* @property {object} animatedCenterPoint
 			*/
			animatedCenterPoint: undefined,
			/**
 			* the background color of the view
 			*
 			* @property {string} backgroundColor
 			*/
			backgroundColor: undefined,
			/**
 			* the disabled background color of the view. (Android)
 			*
 			* @property {string} backgroundDisabledColor
 			*/
			backgroundDisabledColor: {
				value: undefined,
				iphone: false
			},
			/**
 			* the disabled background image url of the view. (Android)
 			*
 			* @property {string} backgroundDisabledImage
 			*/
			backgroundDisabledImage: {
				value: undefined,
				iphone: false
			},
			/**
 			* the focused background color of the view. focusable must be true for normal views. (Android)
 			*
 			* @property {string} backgroundFocusedColor
 			*/
			backgroundFocusedColor: {
				value: undefined,
				iphone: false
			},
			/**
 			* the focused background image url of the view. focusable must be true for normal views. (Android)
 			*
 			* @property {string} backgroundFocusedImage
 			*/
			backgroundFocusedImage: undefined,
			/**
 			* a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
 			*
 			* @property {object} backgroundGradient
 			*/
			backgroundGradient: undefined,
			/**
 			* the background image url of the view
 			*
 			* @property {string} backgroundImage
 			*/
			backgroundImage: undefined,
			/**
 			* End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
 			*
 			* @property {float} backgroundLeftCap
 			*/
			backgroundLeftCap: undefined,
			/**
 			* the selected background color of the view. focusable must be true for normal views. (Android)
 			*
 			* @property {string} backgroundSelectedColor
 			*/
			backgroundSelectedColor: {
				value: undefined,
				iphone: false
			},
			/**
 			* the selected background image url of the view. focusable must be true for normal views. (Android)
 			*
 			* @property {string} backgroundSelectedImage
 			*/
			backgroundSelectedImage: {
				value: undefined,
				iphone: false
			},
			/**
 			* End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
 			*
 			* @property {float} backgroundTopCap
 			*/
			backgroundTopCap: undefined,
			/**
 			* the border color of the view
 			*
 			* @property {string} borderColor
 			*/
			borderColor: undefined,
			/**
 			* the border radius of the view
 			*
 			* @property {float} borderRadius
 			*/
			borderRadius: undefined,
			/**
 			* the border width of the view
 			*
 			* @property {float} borderWidth
 			*/
			borderWidth: undefined,
			/**
 			* property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
 			*
 			* @property {float,string} bottom
 			*/
			bottom: undefined,
			/**
 			* a dictionary with properties x and y to indicate the center of the views position relative to the parent view
 			*
 			* @property {object} center
 			*/
			center: undefined,// metal.getDefaultCenter(),//[object TiPoint],

			/**
 			* Define the JSS style name
 			*
 			* @property {string} className
 			*/
			className: undefined,

			/**
 			* Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
 			*
 			* @property {boolean} focusable
 			*/
			focusable: {
				value: undefined,
				iphone: false
			},
			/**
 			* the font family
 			*
 			* @property {string} fontFamily
 			*/
			fontFamily: undefined,
			/**
 			* the font size
 			*
 			* @property {string} fontSize
 			*/
			fontSize: undefined,
			/**
 			* the font style, either normal or italics
 			*
 			* @property {string} fontStyle
 			*/
			fontStyle: undefined,
			/**
 			* the font weight, either normal or bold
 			*
 			* @property {string} fontWeight
 			*/
			fontWeight: undefined,
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
 			* property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
 			*
 			* @property {float,string} left
 			*/
			left: undefined,
			/**
 			* the opacity from 0.0-1.0
 			*
 			* @property {float} opacity
 			*/
			opacity: undefined,
			/**
 			* property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
 			*
 			* @property {float,string} right
 			*/
			right: undefined,
			/**
 			* the size of the view as a dictionary of width and height properties
 			*
 			* @property {object} size
 			*/
			size: undefined, //metal.getDefaultSize(),//[object TiRect],
			/**
 			* One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
 			*
 			* @property {int} softKeyboardOnFocus
 			*/
			softKeyboardOnFocus: {
				value: undefined,
				iphone: false
			},
			/**
 			* property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
 			*
 			* @property {float,string} top
 			*/
			top: undefined,
			/**
 			* a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
 			*
 			* @property {boolean} touchEnabled
 			*/
			touchEnabled: undefined,
			/**
 			* the transformation matrix to apply to the view
 			*
 			* @property {object} transform
 			*/
			transform: undefined,
			/**
 			* a boolean of the visibility of the view
 			*
 			* @property {boolean} visible
 			*/
			visible: undefined,
			/**
 			* property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
 			*
 			* @property {float,string} width
 			*/
			width: metal.width,
			/**
 			* the z index position relative to other sibling views
 			*
 			* @property {int} zIndex
 			*/
			zIndex: 0
		},

		/**
 		* The animation set on this view
 		*
 		* @properties {metal.model.Animation} animation
 		*/
		animation: null,

		/**
 		* The Titanium view this class wraps
 		*
 		* @property {Titanium.UI.View} component
 		*/
		component: undefined,

		/**
 		* The views associated with this class
 		*
 		* @property {Titanium.UI.View / metal.ui.AbstractView} items
 		*/
		items: [],

		/**
 		* This view's controller
 		*
 		* @property {metal.core.control} controller
 		*/
		controller: undefined,

		/**
 		* @constructor
 		* @param {Object} config
 		*/
		constructor: function(config) {
			metal.overrideClass(this, config);
			dlog('AbstractView::' + this.get('id'), 'constructor');

			// Add bidirectional association
			this.controller = metal.control.add(this.get('id'), this);

			// If any items were sent, add them now
			var items = this.items;
			this.items = [];
			this.add(items);

			this.initComponents();
			this.initAnimation();

			// Call parent constructor
			metal.ui.AbstractView.superclass.constructor.call(this);
		},
		/**
 		*
 		* @method animate
 		* @param {Object} obj
 		* @param {Function} cb
 		*/
		animate: function(obj, cb) {
			this.component.animate(metal.getComponent(obj), cb ||
			function() {
			});

		},
		/**
 		*
 		* @method getView
 		*/
		getView: function() {
			return this.component;
		},
		/**
 		*
 		* @method getItems
 		*/
		getItems: function() {
			return this.items;
		},
		/**
 		*
 		* @method getItem
 		* @param {Integer/String} indexOrId
 		*/
		getItem: function(indexOrId) {
			var item;
			var id;
			if (metal.isString(indexOrId)) {
				// Id
				for (var i = 0, iln = this.items.length; i < iln; i++) {
					id = this.items[i].id || (this.items[i].get ? this.items[i].get('id') : undefined);
					if (id == indexOrId) {
						return this.items[i];
					} else if (this.items[i].items) {
						item = this.items[i].getItem(indexOrId);
						if (item) {
							return item;
						}
					}
				}
			} else {
				// Index
				return this.items[indexOrId];
			}
		},
		/**
 		* @method getItemById
 		* @param {Integer} id
 		*/
		getItemById: function(id) {
			var item;
			for (var i = 0, iln = this.items.length; i < iln; i++) {
				if (this.items[i].get('id') === indexOrId) {
					return this.items[i];
				} else if (this.items[i].items) {
					item = this.items[i].getItem(indexOrId);
					if (item) {
						return item;
					}
				}
			}
		},
		/**
 		* @method getAnimation
 		* @param {String} type
 		*/
		getAnimation: function(type) {
			var animation;
			type = type || '';
			if (type == 'titanium') {
				// Getting the titanium component
				animation = this.animation.getComponent();
			} else {
				//  Getting the metal component
				animation = this.animation;
			}
			return animation;
		},
		/**
 		*
 		* @method add
 		* @param {[Array of] Titanium.UI.View or metal.ui.AbstractView} items
 		*/
		add: function(items) {
			var width = 0;
			var padding = 0; // Default padding value
			var spacer;
			var spacerIndex;
			var views = [];
			var view;
			var left, pleft;
			var right, pright;

			if (metal.isArray(items)) {
				// Array
				for (var i = 0, iln = items.length; i < iln; i++) {
					if (items[i].type == 'spacer') {
						spacerIndex = i;
						if (!items[i].dir) {
							spacer = new metal.ui.View({id: 'spacer'});
							views.push(spacer.getView());
							this.items.push(spacer);
						}
					} else {
						view = metal.getView(items[i]);
						// Calculate the true width of this view
						pleft = parseFloat(view.left) || 0;
						pright = parseFloat(view.right) || 0;

						left = view.left ? parseFloat(view.left) : 0;
						right = view.right ? parseFloat(view.right) : 0;
						width += view.width + left + right;

						views.push(view);
						this.items.push(items[i]);
					}
				}

				if (metal.isUndefined(spacerIndex)) {
					this.component.add(views);
				} else {
					// Append spacer
					var dir = items[spacerIndex].dir;
					padding = items[spacerIndex].padding || padding;
					if (!!dir) {
						views[spacerIndex][dir] = width + padding;
					} else {
						var entireWidth = parseFloat(this.get('width')) || parseFloat(this.component.width) || metal.width;
						views[spacerIndex].width = entireWidth - width - 2 * padding;
						views[0].left = padding;
					}

					this.component.add(views);
				}
			} else if (metal.isObject(items)) {
				// Single object
				this.component.add(metal.getView(items));
				this.items.push(items);
			}
		},
		/**
 		*
 		* @method setToolbar
 		* @param {[Array of] Titanium.UI.View or metal.ui.AbstractView} items
 		*/
		setToolbar: function(items) {
			if (metal.isArray(items)) {
				var toolbar = [];
				for (var i in items) {
					if (items.hasOwnProperty(i)) {
						toolbar.push(metal.getView(items[i]));
					}
				}
				this.component.setToolbar(toolbar);
			} else {
				this.component.setToolbar(metal.getView(items));
			}
		},
		/**
 		*
 		* @method open
 		*/
		open: function() {
			this.component.open();
		},
		/**
 		*
 		* @method remove
 		* @param {Titanium.UI.View or metal.ui.AbstractView} item
 		*/
		remove: function(item) {
			this.component.remove(metal.getView(item));
		},
		/**
 		* Hide this window
 		*
 		* @method hide
 		*/
		hide: function() {
			this.component.hide();
		},
		/**
 		* Close this window
 		*
 		* @method close
 		*/
		close: function() {
			this.component.close();
		},
		/**
 		* Retrun a Blob image of the rendered view
 		*
 		* @method toImage
 		*/
		toImage: function() {
			return this.component.toImage();
		},
		/**
 		*
 		* @method initComponents
 		*/
		initComponents: function() {
			dlog('AbstractView::' + this.get('id'), 'initComponents');
		},
		/**
 		*
 		* @method initEvents
 		*/
		initEvents: function() {
			dlog('AbstractView::' + this.get('id'), 'initEvents');
			// Call parent
			metal.ui.AbstractView.superclass.initEvents.call(this);
		},
		/**
 		*
 		* @method initAnimation
 		*/
		initAnimation: function() {
			dlog('AbstractView::' + this.get('id'), 'initAnimation');
			var animation = this.getAnimation();
			if (animation != null) {
				// Animation is set on this view
				this.animate(animation.getComponent());
			}
		},
		/**
 		*
 		* @event beforeopen
 		* @param {Object} obj
 		*/
		beforeopen: function(obj) {
			dlog('AbstractView::' + this.get('id'), 'before open event');
			return true;
		},
		/**
 		*
 		* @event beforeclose
 		* @param {Object} obj
 		*/
		beforeclose: function(obj) {
			dlog('AbstractView::' + this.get('id'), 'before close event');
			return true;
		}
	};
})());
