this.ilog = this.ilog ||
function(win, msg) {
	console.log('[' + win + '] ' + msg);
};

/**
 * Titanium adapter for HTML debugging
 */
if (typeof Titanium == 'undefined') {
	this.Titanium = this.Ti = {};
	
	this.L = function(value) {
		return value;
	};
	
	Ti.include = function() {
		var ln = arguments.length, i, src;
		for (i = 0; i < ln; i++) {
			
			//src = arguments[i].substring(1, arguments[i].length).replace('Metal', '..');
			src = '../..' + arguments[i];
			document.write('<script type="text/javascript" src="'+src+'"><\/script>');
		}
	};
	Ti.UI = {
		
		iPhone: {
			ActivityIndicatorStyle: {
				/**
				 * @const {Integer} BIG
				 */
				BIG: 0,
				/**
				 * @const {Integer} PLAIN
				 */
				PLAIN: 1,
				/**
				 * @const {Integer} DARK
				 */
				DARK: 2
			}
		},
		
		/**
 		* <p>animation curve constant</p>
 		*
 		* @property {int} ANIMATION_CURVE_EASE_IN
 		*/
		ANIMATION_CURVE_EASE_IN: 1,
		/**
 		* <p>animation curve constant</p>
 		*
 		* @property {int} ANIMATION_CURVE_EASE_IN_OUT
 		*/
		ANIMATION_CURVE_EASE_IN_OUT: 0,
		/**
 		* <p>animation curve constant</p>
 		*
 		* @property {int} ANIMATION_CURVE_EASE_OUT
 		*/
		ANIMATION_CURVE_EASE_OUT: 2,
		/**
 		* <p>animation curve constant</p>
 		*
 		* @property {int} ANIMATION_CURVE_LINEAR
 		*/
		ANIMATION_CURVE_LINEAR: 3,
		/**
 		* <p>text autodetection constant (iOS 4.0+)</p>
 		*
 		* @property {int} AUTODETECT_ADDRESS
 		*/
		AUTODETECT_ADDRESS: 4,
		/**
 		* <p>text autodetection constant (iOS)</p>
 		*
 		* @property {int} AUTODETECT_ALL
 		*/
		AUTODETECT_ALL: -1,
		/**
 		* <p>text autodetection constant (iOS 4.0+)</p>
 		*
 		* @property {int} AUTODETECT_CALENDAR
 		*/
		AUTODETECT_CALENDAR: 8,
		/**
 		* <p>text autodetection constant (iOS)</p>
 		*
 		* @property {int} AUTODETECT_LINK
 		*/
		AUTODETECT_LINK: 2,
		/**
 		* <p>text autodetection constant (iOS)</p>
 		*
 		* @property {int} AUTODETECT_NONE
 		*/
		AUTODETECT_NONE: 0,
		/**
 		* <p>text autodetection constant (iOS)</p>
 		*
 		* @property {int} AUTODETECT_PHONE
 		*/
		AUTODETECT_PHONE: 1,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_CLEAR
 		*/
		BLEND_MODE_CLEAR: 16,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_COLOR
 		*/
		BLEND_MODE_COLOR: 14,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_COLOR_BURN
 		*/
		BLEND_MODE_COLOR_BURN: 7,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_COLOR_DODGE
 		*/
		BLEND_MODE_COLOR_DODGE: 6,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_COPY
 		*/
		BLEND_MODE_COPY: 17,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_DARKEN
 		*/
		BLEND_MODE_DARKEN: 4,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_DESTINATION_ATOP
 		*/
		BLEND_MODE_DESTINATION_ATOP: 24,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_DESTINATION_IN
 		*/
		BLEND_MODE_DESTINATION_IN: 22,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_DESTINATION_OUT
 		*/
		BLEND_MODE_DESTINATION_OUT: 23,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_DESTINATION_OVER
 		*/
		BLEND_MODE_DESTINATION_OVER: 21,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_DIFFERENCE
 		*/
		BLEND_MODE_DIFFERENCE: 10,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_EXCLUSION
 		*/
		BLEND_MODE_EXCLUSION: 11,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_HARD_LIGHT
 		*/
		BLEND_MODE_HARD_LIGHT: 9,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_HUE
 		*/
		BLEND_MODE_HUE: 12,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_LIGHTEN
 		*/
		BLEND_MODE_LIGHTEN: 5,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_LUMINOSITY
 		*/
		BLEND_MODE_LUMINOSITY: 15,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_MULTIPLY
 		*/
		BLEND_MODE_MULTIPLY: 1,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_NORMAL
 		*/
		BLEND_MODE_NORMAL: 0,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_OVERLAY
 		*/
		BLEND_MODE_OVERLAY: 3,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_PLUS_DARKER
 		*/
		BLEND_MODE_PLUS_DARKER: 26,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_PLUS_LIGHTER
 		*/
		BLEND_MODE_PLUS_LIGHTER: 27,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_SATURATION
 		*/
		BLEND_MODE_SATURATION: 13,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_SCREEN
 		*/
		BLEND_MODE_SCREEN: 2,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_SOFT_LIGHT
 		*/
		BLEND_MODE_SOFT_LIGHT: 8,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_SOURCE_ATOP
 		*/
		BLEND_MODE_SOURCE_ATOP: 20,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_SOURCE_IN
 		*/
		BLEND_MODE_SOURCE_IN: 18,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_SOURCE_OUT
 		*/
		BLEND_MODE_SOURCE_OUT: 19,
		/**
 		* <p>image mode constant</p>
 		*
 		* @property {int} BLEND_MODE_XOR
 		*/
		BLEND_MODE_XOR: 25,
		/**
 		* <p>orientation constant</p>
 		*
 		* @property {int} FACE_DOWN
 		*/
		FACE_DOWN: 6,
		/**
 		* <p>orientation constant</p>
 		*
 		* @property {int} FACE_UP
 		*/
		FACE_UP: 5,
		/**
 		* <p>input border style constant</p>
 		*
 		* @property {int} INPUT_BORDERSTYLE_BEZEL
 		*/
		INPUT_BORDERSTYLE_BEZEL: 2,
		/**
 		* <p>input border style constant</p>
 		*
 		* @property {int} INPUT_BORDERSTYLE_LINE
 		*/
		INPUT_BORDERSTYLE_LINE: 1,
		/**
 		* <p>input border style constant</p>
 		*
 		* @property {int} INPUT_BORDERSTYLE_NONE
 		*/
		INPUT_BORDERSTYLE_NONE: 0,
		/**
 		* <p>input border style constant</p>
 		*
 		* @property {int} INPUT_BORDERSTYLE_ROUNDED
 		*/
		INPUT_BORDERSTYLE_ROUNDED: 3,
		/**
 		* <p>input button mode constant</p>
 		*
 		* @property {int} INPUT_BUTTONMODE_ALWAYS
 		*/
		INPUT_BUTTONMODE_ALWAYS: 3,
		/**
 		* <p>input button mode constant</p>
 		*
 		* @property {int} INPUT_BUTTONMODE_NEVER
 		*/
		INPUT_BUTTONMODE_NEVER: 0,
		/**
 		* <p>input button mode constant</p>
 		*
 		* @property {int} INPUT_BUTTONMODE_ONBLUR
 		*/
		INPUT_BUTTONMODE_ONBLUR: 2,
		/**
 		* <p>input button mode constant</p>
 		*
 		* @property {int} INPUT_BUTTONMODE_ONFOCUS
 		*/
		INPUT_BUTTONMODE_ONFOCUS: 1,
		/**
 		* <p>textfield keyboard appearance constant</p>
 		*
 		* @property {int} KEYBOARD_APPEARANCE_ALERT
 		*/
		KEYBOARD_APPEARANCE_ALERT: 1,
		/**
 		* <p>textfield keyboard appearance constant</p>
 		*
 		* @property {int} KEYBOARD_APPEARANCE_DEFAULT
 		*/
		KEYBOARD_APPEARANCE_DEFAULT: 0,
		/**
 		* <p>textfield keyboard constant</p>
 		*
 		* @property {int} KEYBOARD_ASCII
 		*/
		KEYBOARD_ASCII: 1,
		/**
 		* <p>textfield keyboard constant</p>
 		*
 		* @property {int} KEYBOARD_DEFAULT
 		*/
		KEYBOARD_DEFAULT: 0,
		/**
 		* <p>textfield keyboard constant</p>
 		*
 		* @property {int} KEYBOARD_EMAIL
 		*/
		KEYBOARD_EMAIL: 7,
		/**
 		* <p>textfield keyboard constant</p>
 		*
 		* @property {int} KEYBOARD_NAMEPHONE_PAD
 		*/
		KEYBOARD_NAMEPHONE_PAD: 6,
		/**
 		* <p>textfield keyboard constant</p>
 		*
 		* @property {int} KEYBOARD_NUMBERS_PUNCTUATION
 		*/
		KEYBOARD_NUMBERS_PUNCTUATION: 2,
		/**
 		* <p>textfield keyboard constant</p>
 		*
 		* @property {int} KEYBOARD_NUMBER_PAD
 		*/
		KEYBOARD_NUMBER_PAD: 4,
		/**
 		* <p>textfield keyboard constant</p>
 		*
 		* @property {int} KEYBOARD_PHONE_PAD
 		*/
		KEYBOARD_PHONE_PAD: 5,
		/**
 		* <p>textfield keyboard constant</p>
 		*
 		* @property {int} KEYBOARD_URL
 		*/
		KEYBOARD_URL: 3,
		/**
 		* <p>orientation (home button on left) constant</p>
 		*
 		* @property {int} LANDSCAPE_LEFT
 		*/
		LANDSCAPE_LEFT: 4,
		/**
 		* <p>orientation (home button on right) constant</p>
 		*
 		* @property {int} LANDSCAPE_RIGHT
 		*/
		LANDSCAPE_RIGHT: 3,
		/**
 		* <p>Duration of the notification</p>
 		*
 		* @property {int} NOTIFICATION_DURATION_LONG
 		*/
		NOTIFICATION_DURATION_LONG: undefined,
		/**
 		* <p>Duration of the notification</p>
 		*
 		* @property {int} NOTIFICATION_DURATION_SHORT
 		*/
		NOTIFICATION_DURATION_SHORT: undefined,
		/**
 		* <p>picker type constant</p>
 		*
 		* @property {int} PICKER_TYPE_COUNT_DOWN_TIMER
 		*/
		PICKER_TYPE_COUNT_DOWN_TIMER: 3,
		/**
 		* <p>picker type constant</p>
 		*
 		* @property {int} PICKER_TYPE_DATE
 		*/
		PICKER_TYPE_DATE: 1,
		/**
 		* <p>picker type constant</p>
 		*
 		* @property {int} PICKER_TYPE_DATE_AND_TIME
 		*/
		PICKER_TYPE_DATE_AND_TIME: 2,
		/**
 		* <p>picker type constant</p>
 		*
 		* @property {int} PICKER_TYPE_PLAIN
 		*/
		PICKER_TYPE_PLAIN: -1,
		/**
 		* <p>picker type constant</p>
 		*
 		* @property {int} PICKER_TYPE_TIME
 		*/
		PICKER_TYPE_TIME: 0,
		/**
 		* <p>orientation (home button on bottom) constant</p>
 		*
 		* @property {int} PORTRAIT
 		*/
		PORTRAIT: 1,
		/**
 		* <p>textfield return key constant</p>
 		*
 		* @property {int} RETURNKEY_DEFAULT
 		*/
		RETURNKEY_DEFAULT: 0,
		/**
 		* <p>textfield return key constant</p>
 		*
 		* @property {int} RETURNKEY_DONE
 		*/
		RETURNKEY_DONE: 9,
		/**
 		* <p>textfield return key constant</p>
 		*
 		* @property {int} RETURNKEY_EMERGENCY_CALL
 		*/
		RETURNKEY_EMERGENCY_CALL: 10,
		/**
 		* <p>textfield return key constant</p>
 		*
 		* @property {int} RETURNKEY_GO
 		*/
		RETURNKEY_GO: 1,
		/**
 		* <p>textfield return key constant</p>
 		*
 		* @property {int} RETURNKEY_GOOGLE
 		*/
		RETURNKEY_GOOGLE: 2,
		/**
 		* <p>textfield return key constant</p>
 		*
 		* @property {int} RETURNKEY_JOIN
 		*/
		RETURNKEY_JOIN: 3,
		/**
 		* <p>textfield return key constant</p>
 		*
 		* @property {int} RETURNKEY_NEXT
 		*/
		RETURNKEY_NEXT: 4,
		/**
 		* <p>textfield return key constant</p>
 		*
 		* @property {int} RETURNKEY_ROUTE
 		*/
		RETURNKEY_ROUTE: 5,
		/**
 		* <p>textfield return key constant</p>
 		*
 		* @property {int} RETURNKEY_SEARCH
 		*/
		RETURNKEY_SEARCH: 6,
		/**
 		* <p>textfield return key constant</p>
 		*
 		* @property {int} RETURNKEY_SEND
 		*/
		RETURNKEY_SEND: 7,
		/**
 		* <p>textfield return key constant</p>
 		*
 		* @property {int} RETURNKEY_YAHOO
 		*/
		RETURNKEY_YAHOO: 8,
		/**
 		* <p>text align constant</p>
 		*
 		* @property {int} TEXT_ALIGNMENT_CENTER
 		*/
		TEXT_ALIGNMENT_CENTER: 1,
		/**
 		* <p>text align constant</p>
 		*
 		* @property {int} TEXT_ALIGNMENT_LEFT
 		*/
		TEXT_ALIGNMENT_LEFT: 0,
		/**
 		* <p>text align constant</p>
 		*
 		* @property {int} TEXT_ALIGNMENT_RIGHT
 		*/
		TEXT_ALIGNMENT_RIGHT: 2,
		/**
 		* <p>text capitalization constant</p>
 		*
 		* @property {int} TEXT_AUTOCAPITALIZATION_ALL
 		*/
		TEXT_AUTOCAPITALIZATION_ALL: 3,
		/**
 		* <p>text capitalization constant</p>
 		*
 		* @property {int} TEXT_AUTOCAPITALIZATION_NONE
 		*/
		TEXT_AUTOCAPITALIZATION_NONE: 0,
		/**
 		* <p>text capitalization constant</p>
 		*
 		* @property {int} TEXT_AUTOCAPITALIZATION_SENTENCES
 		*/
		TEXT_AUTOCAPITALIZATION_SENTENCES: 2,
		/**
 		* <p>text capitalization constant</p>
 		*
 		* @property {int} TEXT_AUTOCAPITALIZATION_WORDS
 		*/
		TEXT_AUTOCAPITALIZATION_WORDS: 1,
		/**
 		* <p>text vertical align constant</p>
 		*
 		* @property {int} TEXT_VERTICAL_ALIGNMENT_BOTTOM
 		*/
		TEXT_VERTICAL_ALIGNMENT_BOTTOM: 2,
		/**
 		* <p>text vertical align constant</p>
 		*
 		* @property {int} TEXT_VERTICAL_ALIGNMENT_CENTER
 		*/
		TEXT_VERTICAL_ALIGNMENT_CENTER: 0,
		/**
 		* <p>text vertical align constant</p>
 		*
 		* @property {int} TEXT_VERTICAL_ALIGNMENT_TOP
 		*/
		TEXT_VERTICAL_ALIGNMENT_TOP: 1,
		/**
 		* <p>orientation constant</p>
 		*
 		* @property {int} UNKNOWN
 		*/
		UNKNOWN: 0,
		/**
 		* <p>orientation (home button on top) constant</p>
 		*
 		* @property {int} UPSIDE_PORTRAIT
 		*/
		UPSIDE_PORTRAIT: 2,

		/**
 		* add an event listener for the instance to receive view triggered events
 		*
 		* @method <a href="Titanium.UI.addEventListener-method.html">addEventListener</a>
 		*/
		addEventListener: function(config) {
			return { properties: config };
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.2DMatrix-object.html">Titanium.UI.2DMatrix</a>
 		*
 		* @method <a href="Titanium.UI.create2DMatrix-method.html">create2DMatrix</a>
 		*/
		create2DMatrix: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.3DMatrix-object.html">Titanium.UI.3DMatrix</a>
 		*
 		* @method <a href="Titanium.UI.create3DMatrix-method.html">create3DMatrix</a>
 		*/
		create3DMatrix: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.ActivityIndicator-object.html">Titanium.UI.ActivityIndicator</a>
 		*
 		* @method <a href="Titanium.UI.createActivityIndicator-method.html">createActivityIndicator</a>
 		*/
		createActivityIndicator: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.AlertDialog-object.html">Titanium.UI.AlertDialog</a>
 		*
 		* @method <a href="Titanium.UI.createAlertDialog-method.html">createAlertDialog</a>
 		*/
		createAlertDialog: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.Animation-object.html">Titanium.UI.Animation</a>
 		*
 		* @method <a href="Titanium.UI.createAnimation-method.html">createAnimation</a>
 		*/
		createAnimation: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.Button-object.html">Titanium.UI.Button</a>
 		*
 		* @method <a href="Titanium.UI.createButton-method.html">createButton</a>
 		*/
		createButton: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.ButtonBar-object.html">Titanium.UI.ButtonBar</a>
 		*
 		* @method <a href="Titanium.UI.createButtonBar-method.html">createButtonBar</a>
 		*/
		createButtonBar: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.CoverFlowView-object.html">Titanium.UI.CoverFlowView</a>
 		*
 		* @method <a href="Titanium.UI.createCoverFlowView-method.html">createCoverFlowView</a>
 		*/
		createCoverFlowView: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.DashboardItem-object.html">Titanium.UI.DashboardItem</a>
 		*
 		* @method <a href="Titanium.UI.createDashboardItem-method.html">createDashboardItem</a>
 		*/
		createDashboardItem: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.DashboardView-object.html">Titanium.UI.DashboardView</a>
 		*
 		* @method <a href="Titanium.UI.createDashboardView-method.html">createDashboardView</a>
 		*/
		createDashboardView: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.EmailDialog-object.html">Titanium.UI.EmailDialog</a>
 		*
 		* @method <a href="Titanium.UI.createEmailDialog-method.html">createEmailDialog</a>
 		*/
		createEmailDialog: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.ImageView-object.html">Titanium.UI.ImageView</a>
 		*
 		* @method <a href="Titanium.UI.createImageView-method.html">createImageView</a>
 		*/
		createImageView: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.Label-object.html">Titanium.UI.Label</a>
 		*
 		* @method <a href="Titanium.UI.createLabel-method.html">createLabel</a>
 		*/
		createLabel: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.OptionDialog-object.html">Titanium.UI.OptionDialog</a>
 		*
 		* @method <a href="Titanium.UI.createOptionDialog-method.html">createOptionDialog</a>
 		*/
		createOptionDialog: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.Picker-object.html">Titanium.UI.Picker</a>
 		*
 		* @method <a href="Titanium.UI.createPicker-method.html">createPicker</a>
 		*/
		createPicker: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.PickerColumn-object.html">Titanium.UI.PickerColumn</a>
 		*
 		* @method <a href="Titanium.UI.createPickerColumn-method.html">createPickerColumn</a>
 		*/
		createPickerColumn: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.PickerRow-object.html">Titanium.UI.PickerRow</a>
 		*
 		* @method <a href="Titanium.UI.createPickerRow-method.html">createPickerRow</a>
 		*/
		createPickerRow: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.ProgressBar-object.html">Titanium.UI.ProgressBar</a>
 		*
 		* @method <a href="Titanium.UI.createProgressBar-method.html">createProgressBar</a>
 		*/
		createProgressBar: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.ScrollView-object.html">Titanium.UI.ScrollView</a>
 		*
 		* @method <a href="Titanium.UI.createScrollView-method.html">createScrollView</a>
 		*/
		createScrollView: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.ScrollableView-object.html">Titanium.UI.ScrollableView</a>
 		*
 		* @method <a href="Titanium.UI.createScrollableView-method.html">createScrollableView</a>
 		*/
		createScrollableView: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.SearchBar-object.html">Titanium.UI.SearchBar</a>
 		*
 		* @method <a href="Titanium.UI.createSearchBar-method.html">createSearchBar</a>
 		*/
		createSearchBar: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.Slider-object.html">Titanium.UI.Slider</a>
 		*
 		* @method <a href="Titanium.UI.createSlider-method.html">createSlider</a>
 		*/
		createSlider: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.Switch-object.html">Titanium.UI.Switch</a>
 		*
 		* @method <a href="Titanium.UI.createSwitch-method.html">createSwitch</a>
 		*/
		createSwitch: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.Tab-object.html">Titanium.UI.Tab</a>
 		*
 		* @method <a href="Titanium.UI.createTab-method.html">createTab</a>
 		*/
		createTab: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.TabGroup-object.html">Titanium.UI.TabGroup</a>
 		*
 		* @method <a href="Titanium.UI.createTabGroup-method.html">createTabGroup</a>
 		*/
		createTabGroup: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.TabGroup.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.TabGroup.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* <p>add a tab to the tab group</p>
 				*
 				* @method <a href="Titanium.UI.TabGroup.addTab-method.html">addTab</a>
 				*/
				addTab: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.TabGroup.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the tab group and remove it from the UI</p>
 				*
 				* @method <a href="Titanium.UI.TabGroup.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.TabGroup.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.TabGroup.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the tab group and make it visible</p>
 				*
 				* @method <a href="Titanium.UI.TabGroup.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.TabGroup.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.TabGroup.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* <p>remove a tab from the tab group</p>
 				*
 				* @method <a href="Titanium.UI.TabGroup.removeTab-method.html">removeTab</a>
 				*/
				removeTab: function(config) {
					return { properties: config };
				},
				/**
 				* <p>select the currently active tab in a tab group</p>
 				*
 				* @method <a href="Titanium.UI.TabGroup.setActiveTab-method.html">setActiveTab</a>
 				*/
				setActiveTab: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.TabGroup.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.TabGroup.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.TabbedBar-object.html">Titanium.UI.TabbedBar</a>
 		*
 		* @method <a href="Titanium.UI.createTabbedBar-method.html">createTabbedBar</a>
 		*/
		createTabbedBar: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.TableView-object.html">Titanium.UI.TableView</a>
 		*
 		* @method <a href="Titanium.UI.createTableView-method.html">createTableView</a>
 		*/
		createTableView: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.TableViewRow-object.html">Titanium.UI.TableViewRow</a>
 		*
 		* @method <a href="Titanium.UI.createTableViewRow-method.html">createTableViewRow</a>
 		*/
		createTableViewRow: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.TableViewSection-object.html">Titanium.UI.TableViewSection</a>
 		*
 		* @method <a href="Titanium.UI.createTableViewSection-method.html">createTableViewSection</a>
 		*/
		createTableViewSection: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.TextArea-object.html">Titanium.UI.TextArea</a>
 		*
 		* @method <a href="Titanium.UI.createTextArea-method.html">createTextArea</a>
 		*/
		createTextArea: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.TextField-object.html">Titanium.UI.TextField</a>
 		*
 		* @method <a href="Titanium.UI.createTextField-method.html">createTextField</a>
 		*/
		createTextField: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.Toolbar-object.html">Titanium.UI.Toolbar</a>
 		*
 		* @method <a href="Titanium.UI.createToolbar-method.html">createToolbar</a>
 		*/
		createToolbar: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.View-object.html">Titanium.UI.View</a>
 		*
 		* @method <a href="Titanium.UI.createView-method.html">createView</a>
 		*/
		createView: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.WebView-object.html">Titanium.UI.WebView</a>
 		*
 		* @method <a href="Titanium.UI.createWebView-method.html">createWebView</a>
 		*/
		createWebView: function(config) {
			return { properties: config };
		},
		/**
 		* create and return an instance of <a href="Titanium.UI.Window-object.html">Titanium.UI.Window</a>
 		*
 		* @method <a href="Titanium.UI.createWindow-method.html">createWindow</a>
 		*/
		createWindow: function(config) {
			return {
				properties: config,

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.UI.Window.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.UI.Window.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.UI.Window.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>close the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.close-method.html">close</a>
 				*/
				close: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.UI.Window.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.UI.Window.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* <p>open the window</p>
 				*
 				* @method <a href="Titanium.UI.Window.open-method.html">open</a>
 				*/
				open: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.UI.Window.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.Window.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.UI.Window.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.UI.Window.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				}
			};
		},
		/**
 		* fire a synthesized event to the views listener
 		*
 		* @method <a href="Titanium.UI.fireEvent-method.html">fireEvent</a>
 		*/
		fireEvent: function(config) {
			return { properties: config };
		},
		/**
 		* remove a previously added event listener
 		*
 		* @method <a href="Titanium.UI.removeEventListener-method.html">removeEventListener</a>
 		*/
		removeEventListener: function(config) {
			return { properties: config };
		}
	};

	Ti.API = {
		info: function(msg) {
			console.log('' + msg);
		},
		debug: function(msg) {
			console.log('[DEBUG]' + msg);
		},
		warn: function(msg) {
			console.log('[WARN]' + msg);
		},
		error: function(msg) {
			console.log('[ERROR]' + msg);
		},
		addEventListener: function(config) {
			return { properties: config };
		},
		/**
 		* remove a previously added event listener
 		*
 		* @method <a href="Titanium.UI.removeEventListener-method.html">removeEventListener</a>
 		*/
		removeEventListener: function(config) {
			return { properties: config };
		}
	};

	Ti.Platform = {
		/**
 		* <p>the device is plugged in and currently being charged</p>
 		*
 		* @property {int} BATTERY_STATE_CHARGING
 		*/
		BATTERY_STATE_CHARGING: 2,
		/**
 		* <p>the battery is fully charged</p>
 		*
 		* @property {int} BATTERY_STATE_FULL
 		*/
		BATTERY_STATE_FULL: 3,
		/**
 		* <p>the battery state is unknown or not monitoring is not enabled</p>
 		*
 		* @property {int} BATTERY_STATE_UNKNOWN
 		*/
		BATTERY_STATE_UNKNOWN: 0,
		/**
 		* <p>the device is unplugged</p>
 		*
 		* @property {int} BATTERY_STATE_UNPLUGGED
 		*/
		BATTERY_STATE_UNPLUGGED: 1,
		/**
 		* <p>the ip address that the device reports (only applicable on WIFI network)</p>
 		*
 		* @property {string} address
 		*/
		address: '192.168.1.101',
		/**
 		* <p>the processor architecture that the device reports</p>
 		*
 		* @property {string} architecture
 		*/
		architecture: 'i386',
		/**
 		* <p>return the amount of memory available on the device in bytes</p>
 		*
 		* @property {double} availableMemory
 		*/
		availableMemory: 1600.265625,
		/**
 		* <p>the current device battery level. this property is only accessible if <tt>batteryMonitoring</tt> is enabled. on iPhone, this level only changes at 5% intervals.</p>
 		*
 		* @property {float} batteryLevel
 		*/
		batteryLevel: -1,
		/**
 		* <p>boolean to indicate if battery monitoring is enabled</p>
 		*
 		* @property {boolean} batteryMonitoring
 		*/
		batteryMonitoring: false,
		/**
 		* <p>constant that represents the state of the battery. this property is only accessible if <tt>batteryMonitoring</tt> is enabled</p>
 		*
 		* @property {int} batteryState
 		*/
		batteryState: 0,
		/**
 		* <p>return the DisplayCaps object for platform</p>
 		*
 		* @property {object} displayCaps
 		*/
		displayCaps: {
			density: 'high',
			dpi: 1,
			platformHeight: 480,
			platformWidth: 320
		},
		/**
 		* <p>the unique id of the device</p>
 		*
 		* @property {string} id
 		*/
		id: '95BF78B0-9309-5A62-883D-E3511B1B0A67',
		/**
 		* <p>the primary language of the device that the user has enabled</p>
 		*
 		* @property {string} locale
 		*/
		locale: 'en',
		/**
 		* <p>this property will return a unique identifier for the device</p>
 		*
 		* @property {string} macaddress
 		*/
		macaddress: '95BF78B0-9309-5A62-883D-E3511B1B0A67',
		/**
 		* <p>the model of the phone that the device reports</p>
 		*
 		* @property {string} model
 		*/
		model: 'Simulator',
		/**
 		* <p>the name of the platform returned by the device</p>
 		*
 		* @property {string} name
 		*/
		name: 'iPhone OS',
		/**
 		* <p>the network mask that the device reports (only applicable on WIFI network)</p>
 		*
 		* @property {string} netmask
 		*/
		netmask: '255.255.255.0',
		/**
 		* <p>the shortname of the operating system. for example, on an iPhone, will return <tt>iphone</tt>, iPad will return <tt>ipad</tt> and Android will return <tt>android</tt>.</p>
 		*
 		* @property {string} osname
 		*/
		osname: 'iphone',
		/**
 		* <p>the OS architecture, such as 32 bit</p>
 		*
 		* @property {string} ostype
 		*/
		ostype: '32bit',
		/**
 		* <p>the number of processors the device reports</p>
 		*
 		* @property {int} processorCount
 		*/
		processorCount: 1,
		/**
 		* <p>the username of the device, if set</p>
 		*
 		* @property {string} username
 		*/
		username: 'iPhone Simulator',
		/**
 		* <p>the version of the platform returned by the device</p>
 		*
 		* @property {string} version
 		*/
		version: 4.2
	};

	Ti.Gesture = {
		addEventListener: function(config) {
			return { properties: config };
		},
		/**
 		* remove a previously added event listener
 		*
 		* @method <a href="Titanium.UI.removeEventListener-method.html">removeEventListener</a>
 		*/
		removeEventListener: function(config) {
			return { properties: config };
		},
		fireEvent: function(config) {

		}
	};

	Ti.Map = {
		HYBRID_TYPE: 1,
		SATELLITE_TYPE: 2,
		STANDARD_TYPE: 3,

		createAnnotation: function(config) {
			return {
				properties: config,

				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.UI.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				fireEvent: function(config) {

				}
			};
		},
		createMapView: function(config) {
			return {

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.Map.MapView.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* <p>add a new annotation to the map</p>
 				*
 				* @method <a href="Titanium.Map.MapView.addAnnotation-method.html">addAnnotation</a>
 				*/
				addAnnotation: function(config) {
					return { properties: config };
				},
				/**
 				* <p>add one or more new annotation to the map</p>
 				*
 				* @method <a href="Titanium.Map.MapView.addAnnotations-method.html">addAnnotations</a>
 				*/
				addAnnotations: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.Map.MapView.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* <p>add a route. currently only supported on iphone</p>
 				*
 				* @method <a href="Titanium.Map.MapView.addRoute-method.html">addRoute</a>
 				*/
				addRoute: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.Map.MapView.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>cause the annotation to be deselected (hidden).</p>
 				*
 				* @method <a href="Titanium.Map.MapView.deselectAnnotation-method.html">deselectAnnotation</a>
 				*/
				deselectAnnotation: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.Map.MapView.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.Map.MapView.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.Map.MapView.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* <p>removes all annotations added to the map</p>
 				*
 				* @method <a href="Titanium.Map.MapView.removeAllAnnotations-method.html">removeAllAnnotations</a>
 				*/
				removeAllAnnotations: function(config) {
					return { properties: config };
				},
				/**
 				* <p>remove an existing annotation from the map</p>
 				*
 				* @method <a href="Titanium.Map.MapView.removeAnnotation-method.html">removeAnnotation</a>
 				*/
				removeAnnotation: function(config) {
					return { properties: config };
				},
				/**
 				* <p>remove one or more existing annotations from the map</p>
 				*
 				* @method <a href="Titanium.Map.MapView.removeAnnotations-method.html">removeAnnotations</a>
 				*/
				removeAnnotations: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.Map.MapView.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* <p>remove a previously added route. currently only supported on iphone</p>
 				*
 				* @method <a href="Titanium.Map.MapView.removeRoute-method.html">removeRoute</a>
 				*/
				removeRoute: function(config) {
					return { properties: config };
				},
				/**
 				* <p>cause the annotation to be selected (shown).</p>
 				*
 				* @method <a href="Titanium.Map.MapView.selectAnnotation-method.html">selectAnnotation</a>
 				*/
				selectAnnotation: function(config) {
					return { properties: config };
				},
				/**
 				* <p>set and center the map location.</p>
 				*
 				* @method <a href="Titanium.Map.MapView.setLocation-method.html">setLocation</a>
 				*/
				setLocation: function(config) {
					return { properties: config };
				},
				/**
 				* <p>set the type of map (satellite, hybrid, standard)</p>
 				*
 				* @method <a href="Titanium.Map.MapView.setMapType-method.html">setMapType</a>
 				*/
				setMapType: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.Map.MapView.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.Map.MapView.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				},
				/**
 				* <p>zoom in or out of the map</p>
 				*
 				* @method <a href="Titanium.Map.MapView.zoom-method.html">zoom</a>
 				*/
				zoom: function(config) {
					return { properties: config };
				}
			};
		},
		createView: function(config) {
			return {

				/**
 				* add a child to the view hierarchy
 				*
 				* @method <a href="Titanium.Map.MapView.add-method.html">add</a>
 				*/
				add: function(config) {
					return { properties: config };
				},
				/**
 				* <p>add a new annotation to the map</p>
 				*
 				* @method <a href="Titanium.Map.MapView.addAnnotation-method.html">addAnnotation</a>
 				*/
				addAnnotation: function(config) {
					return { properties: config };
				},
				/**
 				* <p>add one or more new annotation to the map</p>
 				*
 				* @method <a href="Titanium.Map.MapView.addAnnotations-method.html">addAnnotations</a>
 				*/
				addAnnotations: function(config) {
					return { properties: config };
				},
				/**
 				* add an event listener for the instance to receive view triggered events
 				*
 				* @method <a href="Titanium.Map.MapView.addEventListener-method.html">addEventListener</a>
 				*/
				addEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* <p>add a route. currently only supported on iphone</p>
 				*
 				* @method <a href="Titanium.Map.MapView.addRoute-method.html">addRoute</a>
 				*/
				addRoute: function(config) {
					return { properties: config };
				},
				/**
 				* animate the view
 				*
 				* @method <a href="Titanium.Map.MapView.animate-method.html">animate</a>
 				*/
				animate: function(config) {
					return { properties: config };
				},
				/**
 				* <p>cause the annotation to be deselected (hidden).</p>
 				*
 				* @method <a href="Titanium.Map.MapView.deselectAnnotation-method.html">deselectAnnotation</a>
 				*/
				deselectAnnotation: function(config) {
					return { properties: config };
				},
				/**
 				* fire a synthesized event to the views listener
 				*
 				* @method <a href="Titanium.Map.MapView.fireEvent-method.html">fireEvent</a>
 				*/
				fireEvent: function(config) {
					return { properties: config };
				},
				/**
 				* hide the view
 				*
 				* @method <a href="Titanium.Map.MapView.hide-method.html">hide</a>
 				*/
				hide: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously add view from the view hiearchy
 				*
 				* @method <a href="Titanium.Map.MapView.remove-method.html">remove</a>
 				*/
				remove: function(config) {
					return { properties: config };
				},
				/**
 				* <p>removes all annotations added to the map</p>
 				*
 				* @method <a href="Titanium.Map.MapView.removeAllAnnotations-method.html">removeAllAnnotations</a>
 				*/
				removeAllAnnotations: function(config) {
					return { properties: config };
				},
				/**
 				* <p>remove an existing annotation from the map</p>
 				*
 				* @method <a href="Titanium.Map.MapView.removeAnnotation-method.html">removeAnnotation</a>
 				*/
				removeAnnotation: function(config) {
					return { properties: config };
				},
				/**
 				* <p>remove one or more existing annotations from the map</p>
 				*
 				* @method <a href="Titanium.Map.MapView.removeAnnotations-method.html">removeAnnotations</a>
 				*/
				removeAnnotations: function(config) {
					return { properties: config };
				},
				/**
 				* remove a previously added event listener
 				*
 				* @method <a href="Titanium.Map.MapView.removeEventListener-method.html">removeEventListener</a>
 				*/
				removeEventListener: function(config) {
					return { properties: config };
				},
				/**
 				* <p>remove a previously added route. currently only supported on iphone</p>
 				*
 				* @method <a href="Titanium.Map.MapView.removeRoute-method.html">removeRoute</a>
 				*/
				removeRoute: function(config) {
					return { properties: config };
				},
				/**
 				* <p>cause the annotation to be selected (shown).</p>
 				*
 				* @method <a href="Titanium.Map.MapView.selectAnnotation-method.html">selectAnnotation</a>
 				*/
				selectAnnotation: function(config) {
					return { properties: config };
				},
				/**
 				* <p>set and center the map location.</p>
 				*
 				* @method <a href="Titanium.Map.MapView.setLocation-method.html">setLocation</a>
 				*/
				setLocation: function(config) {
					return { properties: config };
				},
				/**
 				* <p>set the type of map (satellite, hybrid, standard)</p>
 				*
 				* @method <a href="Titanium.Map.MapView.setMapType-method.html">setMapType</a>
 				*/
				setMapType: function(config) {
					return { properties: config };
				},
				/**
 				* make the view visible
 				*
 				* @method <a href="Titanium.Map.MapView.show-method.html">show</a>
 				*/
				show: function(config) {
					return { properties: config };
				},
				/**
 				* return a Blob image of the rendered view
 				*
 				* @method <a href="Titanium.Map.MapView.toImage-method.html">toImage</a>
 				*/
				toImage: function(config) {
					return { properties: config };
				},
				/**
 				* <p>zoom in or out of the map</p>
 				*
 				* @method <a href="Titanium.Map.MapView.zoom-method.html">zoom</a>
 				*/
				zoom: function(config) {
					return { properties: config };
				}
			};
		},
		addEventListener: function(config) {
			return { properties: config };
		},
		/**
 		* remove a previously added event listener
 		*
 		* @method <a href="Titanium.UI.removeEventListener-method.html">removeEventListener</a>
 		*/
		removeEventListener: function(config) {
			return { properties: config };
		},
		fireEvent: function(config) {

		}
	};
}
