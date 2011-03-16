metal.ns('metal.media.camera');

/**
 * controls over the camera
 * 
 * @singleton
 * @class metal.media.camera
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.media.camera = (function() {
	
	// Default properties
	var defaults = {
		/**
		 * a function that will be called when the camera is completed
		 * 
		 * @property {function} success
		 */
		success: undefined,
		
		/**
		 * a function that will be called upon receiving an error
		 * 
		 * @property {function} error
		 */
		error: undefined,
		
		/**
		 * a function that will be called if the user presses the cancel button
		 * 
		 * @property {function} cancel
		 */
		cancel: undefined,
		
		/**
		 * if the camera should auto hide after the media capture is completed
		 * 
		 * @property {Boolean} autohide
		 * @default true
		 */
		autohide: true,
		
		/**
		 * if the dialog should be animated upon showing and hiding
		 * 
		 * @property {Boolean} animated
		 * @default true
		 */
		animated: true,
		
		/**
		 * if the media should be saved to the photo gallery upon successful capture
		 * 
		 * @property {Boolean} saveTocamera
		 */
		saveTocamera: undefined,
		
		/**
		 * if the media should be editable after capture in the UI interface
		 * 
		 * @property {Boolean} allowEditing 
		 */
		allowEditing: undefined,
		
		/**
		 * an array of media type constants supported by the capture device UI
		 * 
		 * @property {array} mediaTypes 
		 */
		mediaTypes: undefined,
		
		/**
		 * duration on how long in milliseconds to allow capture before completing
		 * 
		 * @property {float} videoMaximumDuration
		 */
		videoMaximumDuration: undefined,
		
		/**
		 * indicate the video quality during capture
		 * 
		 * @property {integer} videoQuality
		 */
		videoQuality: undefined,
		
		/**
		 * indicate if the built-in UI controls should be displayed
		 * 
		 * @property {Boolean} showControls
		 */
		showControls: undefined,
		
		/**
		 * view which is added as an overlay to the UI (on top)
		 * 
		 * @property {Titanium.UI.View | metal.ui.AbstractView} overlay
		 */
		overlay: undefined,
		
		/**
		 * an transformation matrix that applies to the UI transform
		 * 
		 * @property {object} transform
		 */
		transform: undefined,
		
		/**
		 * can be provided to position the photo gallery popover a specific view
		 * 
		 * @property {Titanium.UI.View | metal.ui.AbstractView} popoverView
		 */
		popoverView: {
			value: undefined,
			android: false,
			iphone: false
		},
		
		/**
		 * can be provided to control the type of arrow and position of the gallery
		 * 
		 * @property {object} arrowDirection
		 */
		arrowDirection: undefined
	};
	
	// Public
	return {
		/**
		 * open the photo gallery picker
		 * 
		 * @method open
		 * @param {object} option Pass nothing (will apply the defaults) or a 
		 * dictionary with the following supported keys: 
		 * success a function that will be called when the camera 
		 * is completed, error a function that will be called upon receiving an error, 
		 * cancel a function that will be called if the user presses the cancel button, 
		 * autohide boolean if the camera should auto hide after the media capture is 
		 * completed (defaults to true), animated boolean if the dialog should be 
		 * animated (defaults to true) upon showing and hiding, saveTocamera 
		 * boolean if the media should be saved to the photo gallery upon successful 
		 * capture, allowEditing boolean if the media should be editable after capture 
		 * in the UI interface, mediaTypes an array of media type constants supported 
		 * by the capture device UI, showControls boolean to indicate if the built-in UI 
		 * controls should be displayed, overlay view which is added as an overlay to 
		 * the UI (on top), transform an transformation matrix that applies to the UI 
		 * transform. For iPad, popoverView can be provided to position the photo 
		 * gallery popover a specific view and arrowDirection can be provided to 
		 * control the type of arrow and position of the gallery.
		 */
		open: function(option) {
			dlog('Camera', 'Opening...');
			option = option || {};
			metal.apply(option, metal.formatProperties(defaults));
			return Titanium.Media.showCamera(option);
		},
		
		/**
		 * Set properties
		 * 
		 * @method set
		 * @param {string} key
		 * @param {object} value
		 */
		set: function(key, value) {
			defaults[key] = value;
		},
		
		/**
		 * Get properties
		 * 
		 * @method get
		 * @param {string} key
		 * 
		 * @return {object} property
		 */
		get: function(key) {
			return defaults[key];
		}
	};
})();