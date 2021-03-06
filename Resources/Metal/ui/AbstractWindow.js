metal.ns('metal.ui.AbstractWindow');

/**
 *
 * @class metal.ui.AbstractWindow
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.AbstractWindow = metal.extend(metal.ui.AbstractView, {

	type: 'MetalAbstractWindow',

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
		id: 'MetalAbstractWindow_' + metal.generateId(),

		/**
 		* <p>title for the back button. only available in iPhone. this is only valid when the window is a child of a tab.</p>
 		*
 		* @property {string} backButtonTitle
 		*/
		backButtonTitle: undefined,
		/**
 		* <p>url to an image to show as the back button. only available in iPhone. this is only valid when the window is a child of a tab.</p>
 		*
 		* @property {string} backButtonTitleImage
 		*/
		backButtonTitleImage: undefined,
		/**
 		* <p>web named color or hex value for the color of the nav bar. only available in iPhone.</p>
 		*
 		* @property {string} barColor
 		*/
		barColor: undefined,
		/**
 		* <p>url to a local image to place as the background of the nav bar. only available in iPhone.</p>
 		*
 		* @property {string} barImage
 		*/
		barImage: undefined,
		/**
 		* <p>(Android only.) Boolean indicates if the application should exit when the Android back button is pressed while the window is being shown. You can only set this as a createWindow({...}) option. Setting it after window creation will no effect.</p>
 		*
 		* @property {boolean} exitOnClose
 		*/
		exitOnClose: {
			value: undefined,
			iphone: false
		},
		/**
 		* <p>boolean indicates if the window is fullscreen (no device chrome)</p>
 		*
 		* @property {boolean} fullscreen
 		*/
		fullscreen: true,
		
		/**
 		* <p>the layout algorithm to use for the layout. either absolute (default), vertical or Horiznotal</p>
 		*
 		* @property {string} layout
 		*/
		layout: undefined,
		
		/**
 		* <p>view to show in the left nav bar area. only available in iPhone.</p>
 		*
 		* @property {object} leftNavButton
 		*/
		leftNavButton: undefined,
		/**
 		* <p>boolean to indicate if the window should be opened modal in front of other windows</p>
 		*
 		* @property {boolean} modal
 		*/
		modal: undefined,
		/**
 		* <p>for modal windows, hide the nav bar (true) or show the nav bar (false, default).</p>
 		*
 		* @property {boolean} navBarHidden
 		*/
		navBarHidden: undefined,
		/**
 		* <p>array of orientation mode constants defined in [Titanium.UI]</p>
 		*
 		* @property {array} orientationModes
 		*/
		orientationModes: null,
		/**
 		* <p>view to show in the right nav bar area. only available in iPhone.</p>
 		*
 		* @property {object} rightNavButton
 		*/
		rightNavButton: undefined,
		/**
 		* <p>One of Ti.UI.Android.SOFT_INPUT_ADJUST_PAN, Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE, or Ti.UI.Android.SOFT_INPUT_ADJUST_UNSPECIFIED. Note: MUST be passed in the creation options. (Android Only) <a href="http://developer.android.com/reference/android/view/Window.html#setSoftInputMode(int)">Android Doc: Window.setSoftInputMode</a></p>
 		*
 		* @property {int} softInputMode
 		*/
		softInputMode: {
			value: undefined,
			iphone: false
		},
		
		/**
 		* <p>boolean to indicate if the tab bar should be hidden. this is only valid when the window is a child of a tab.</p>
 		*
 		* @property {boolean} tabBarHidden
 		*/
		tabBarHidden: undefined,
		/**
 		* <p>title of the window.</p>
 		*
 		* @property {string} title
 		*/
		title: undefined,
		/**
 		* <p>view to show in the title area. only available in iPhone.</p>
 		*
 		* @property {object} titleControl
 		*/
		titleControl: undefined,
		/**
 		* <p>url to a image that show in the title area. only available in iPhone.</p>
 		*
 		* @property {string} titleImage
 		*/
		titleImage: undefined,
		/**
 		* <p>title prompt for the window. only available in iPhone.</p>
 		*
 		* @property {string} titlePrompt
 		*/
		titlePrompt: {
			value: undefined,
			android: false
		},
		/**
 		* <p>the key in the locale file to use for the title property</p>
 		*
 		* @property {string} titleid
 		*/
		titleid: undefined,
		/**
 		* <p>the key in the locale file to use for the titlePrompt property</p>
 		*
 		* @property {string} titlepromptid
 		*/
		titlepromptid: undefined,
		/**
 		* <p>array of button objects to show in the toolbar of the window. only available in iPhone. this is only valid when the window is a child of a tab.</p>
 		*
 		* @property {array} toolbar
 		*/
		toolbar: undefined,
		/**
 		* <p>boolean to indicate if the nav bar is translucent. only available in iPhone.</p>
 		*
 		* @property {boolean} translucent
 		*/
		translucent: undefined,
		/**
 		* <p>url to a JavaScript file with the windows instructions. this window will create a new JavaScript sub-context that will run in its own thread and global variable space.</p>
 		*
 		* @property {string} url
 		*/
		url: undefined
	},

	/**
 	* @constructor
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('AbstractWindow::' + this.get('id'), 'constructor');


		// Call parent constructor
		metal.ui.AbstractWindow.superclass.constructor.call(this);
	},
	
	/**
	*
	* @method initEvents
	*/
	initEvents: function() {
		dlog('AbstractWindow::' + this.get('id'), 'initEvents');
		// Call parent
		metal.ui.AbstractWindow.superclass.initEvents.call(this);
		var me = this;
	
		me.on('close', function() {
			dlog('AbstractWindow::' + me.get('id'), 'closing...');
			me.controller.close(me);
		});
	},
	
	/**
	*
	* @method open
	*/
	open: function() {
		this.controller.open(this);
	},
	
	/**
	* Close this window
	*
	* @method close
	* @param {Object|metal.ui.Animation} animation
	*/
	close: function(animation) {
		this.component.close(animation); 
		// TODO FIXME [AbstractWindow::close] Need to destroy this metal object and its associations
	},
	
	/**
	 * Close this window and return data to previous screen
	 * 
	 * @method closeAndReturn
	 * @param {Object} data
	 * @param {Object | Titanium.UI.Animation | metal.ui.Animation} animation
	 */
	closeAndReturn: function(data, animation) {
		metal.control.send(data);
		this.close(animation);
	},
	
	/**
	 * Return data to previous screen
	 * 
	 * @method rtn
	 * @param {Object} data
	 */
	rtn: function(data) {
		metal.control.send(data);
	},
	
	/**
	 * Send data to different window
	 * 
	 * @param {Object} data
	 * @param {Titanium.UI.Window | metal.ui.Window} win
	 */
	send: function(data, win) {
		metal.control.send(data, win);	
	},
	
	/**
	 * Update data sent by other windows
	 * 
	 * @event update
	 * @param {Object} data
	 */
	update: function(data) {
		dlog('AbstractWindow:: ' + this.get('id'), 'updating data');
		// TODO [AbstractWindow::update] After creating Metal-events, change this to normal "this.on('update'...)"
	},
	
	/**
	*
	* @event beforeopen
	* @param {Object} obj
	*/
	beforeopen: function(obj) {
		dlog('AbstractWindow::' + this.get('id'), 'before open event');
		return true;
	},
	
	/**
	*
	* @event beforeclose
	* @param {Object} obj
	*/
	beforeclose: function(obj) {
		dlog('AbstractWindow::' + this.get('id'), 'before close event');
		return true;
	}
});
