metal.ns('metal.media');

/**
 *
 * @class metal.ui.VideoPlayer
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.media.VideoPlayer = metal.extend(metal.ui.Component, {

	type: 'MetalVideoPlayer',

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
		id: 'MetalVideoPlayer_' + metal.generateId(),

		/**
 		* <p>indicates if a movie should automatically start playback when it is likely to finish uninterrupted based on e.g. network conditions. Defaults to true.</p>
 		*
 		* @property {boolean} autoplay
 		*/
		autoplay: true,

		/**
 		* <p>deprecated. use url property instead.</p>
 		*
 		* @property {string} contentURL
 		*/
		contentURL: null,
		/**
 		* <p>The duration of the movie, or 0.0 if not known.</p>
 		*
 		* @property {double} duration
 		*/
		duration: 0,
		/**
 		* <p>The end time of movie playback. Defaults to NaN, which indicates natural end time of the movie.</p>
 		*
 		* @property {double} endPlaybackTime
 		*/
		endPlaybackTime: 0,

		/**
 		* <p>The start time of movie playback. Defaults to NaN, indicating the natural start time of the movie.</p>
 		*
 		* @property {double} initialPlaybackTime
 		*/
		initialPlaybackTime: 0,

		/**
 		* <p>Returns the network load state of the movie player.</p>
 		*
 		* @property {int} loadState
 		*/
		loadState: 0,
		/**
 		* <p>the media object, either a File or Blob.</p>
 		*
 		* @property {object} media
 		*/
		media: undefined,
		/**
 		* <p>The style of the playback controls. Defaults to <a href="Titanium.Media.VIDEO_CONTROL_DEFAULT-property.html">Titanium.Media.VIDEO_CONTROL_DEFAULT</a></p>
 		*
 		* @property {int} mediaControlStyle
 		*/
		mediaControlStyle: undefined,
		/**
 		* <p>The types of media in the movie, or <a href="Titanium.Media.VIDEO_MEDIA_TYPE_NONE-property.html">Titanium.Media.VIDEO_MEDIA_TYPE_NONE</a> if not known.</p>
 		*
 		* @property {int} mediaTypes
 		*/
		mediaTypes: 0,
		/**
 		* <p>deprecated in 3.2+ of the iPhone SDK - use <tt>mediaControlStyle</tt>. Provides the ability to set the control mode of the movie player. Defaults to <a href="Titanium.Media.VIDEO_CONTROL_DEFAULT-property.html">Titanium.Media.VIDEO_CONTROL_DEFAULT</a>.</p>
 		*
 		* @property {int} movieControlMode
 		*/
		movieControlMode: 0,
		/**
 		* <p>returns a dictionary with properties <tt>width</tt> and <tt>height</tt>. Returns the natural size of the movie or 0 for both properties if not known or applicable.</p>
 		*
 		* @property {object} naturalSize
 		*/
		naturalSize: {
			width: 0,
			height: 0
		},

		/**
 		* <p>The currently playable duration of the movie, for progressively downloaded network content.</p>
 		*
 		* @property {double} playableDuration
 		*/
		playableDuration: 0,
		/**
 		* <p>Returns the current playback state of the music player</p>
 		*
 		* @property {int} playbackState
 		*/
		playbackState: null,
		/**
 		* <p>Boolean to indicate if the player has started playing.</p>
 		*
 		* @property {boolean} playing
 		*/
		playing: false,
		/**
 		* <p>Determines how the movie player repeats when reaching the end of playback. Defaults to <a href="Titanium.Media.VIDEO_REPEAT_MODE_NONE-property.html">Titanium.Media.VIDEO_REPEAT_MODE_NONE</a>.</p>
 		*
 		* @property {int} repeatMode
 		*/
		repeatMode: 0,

		/**
 		* <p>Determines how the content scales to fit the view. Defaults to <a href="Titanium.Media.VIDEO_SCALING_ASPECT_FIT-property.html">Titanium.Media.VIDEO_SCALING_ASPECT_FIT</a>.</p>
 		*
 		* @property {int} scalingMode
 		*/
		scalingMode: 0,

		/**
 		* <p>The playback type of the movie. Defaults to <a href="Titanium.Media.VIDEO_SOURCE_TYPE_UNKNOWN-property.html">Titanium.Media.VIDEO_SOURCE_TYPE_UNKNOWN</a>. Specifying a playback type before playing the movie can result in faster load times.</p>
 		*
 		* @property {int} sourceType
 		*/
		sourceType: 0,

		/**
 		* <p>url of the media.</p>
 		*
 		* @property {string} url
 		*/
		url: null,
		/**
 		* <p>Indicates if the movie player should inherit the application's audio session instead of creating a new session (which would interrupt the application's session). Defaults to true. Setting this property during playback will not take effect until playback is stopped and started again.</p>
 		*
 		* @property {boolean} useApplicationAudioSession
 		*/
		useApplicationAudioSession: true
	},

	/**
 	* The Titanium view this class wraps
 	*
 	* @property {Titanium.Media.VideoPlayer} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('VideoPlayer::' + this.properties.id, 'constructor');

		// Set Titanium component
		this.component = Ti.Media.createVideoPlayer(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.media.VideoPlayer.superclass.constructor.call(this);
	},
        
	/**
	 * @override
	 */ 
	get: function(value) {
		var result = this.component[value];
		if (metal.isNothing(result)) {
			return metal.media.VideoPlayer.superclass.get.call(this, value);
		} else {
			return result;
		}
	},
	
	/**
	 * @method getView
	 */
	getView: function() {
		return this.component;
	},
	
	/**
 	* <p>Cancels all pending asynchronous thumbnail requests.</p>
 	*
 	* @method <a href="Titanium.Media.VideoPlayer.cancelAllThumbnailImageRequests-method.html">cancelAllThumbnailImageRequests</a>
 	*/
	cancelAllThumbnailImageRequests: function() {
		this.component.cancelAllThumbnailImageRequests();
	},
	/**
 	* <p>pause playing the video. On iOS only available under 3.2 and later</p>
 	*
 	* @method <a href="Titanium.Media.VideoPlayer.pause-method.html">pause</a>
 	*/
	pause: function() {
		this.component.pause();
	},
	/**
 	* <p>start playing the video</p>
 	*
 	* @method <a href="Titanium.Media.VideoPlayer.play-method.html">play</a>
 	*/
	play: function() {
		this.component.play();
	},
	/**
 	* <p>release the internal video resources immediately. this is not usually necessary but can help if you no longer need to use the player after it is used to help converse memory.</p>
 	*
 	* @method <a href="Titanium.Media.VideoPlayer.release-method.html">release</a>
 	*/
	release: function() {
		this.component.release();
	},
	/**
 	* <p>Asynchronously request thumbnails for one or more times, provided as an array of numbers (double). Fires a <tt>thumbnail</tt> event on completion. Optionally invokes the callback function passed in the method.</p>
 	*
 	* @method <a href="Titanium.Media.VideoPlayer.requestThumbnailImagesAtTimes-method.html">requestThumbnailImagesAtTimes</a>
 	* @param {Array} times array of doubles for each time to request
 	* @param {Integer} option ither [[Titanium.Media.VIDEO_TIME_OPTION_NEAREST_KEYFRAME]] or [[Titanium.Media.VIDEO_TIME_OPTION_EXACT]].
 	*/
	requestThumbnailImagesAtTimes: function(times, option) {
		return this.component.requestThumbnailImagesAtTimes(times, option);
	},
	/**
 	* <p>A view for customization which is always displayed behind movie content.</p>
 	*
 	* @method <a href="Titanium.Media.VideoPlayer.setBackgroundView-method.html">setBackgroundView</a>
 	* @param {metal.ui.AbstractView} view view to set
 	*/
	setBackgroundView: function(view) {
		this.component.setBackgroundView(view);
		this.properties.backgroundView = view;
	},
	/**
 	* <p>the a non-url based media to play, either a File or Blob.</p>
 	*
 	* @method <a href="Titanium.Media.VideoPlayer.setMedia-method.html">setMedia</a>
 	* @param {Object} media media to play
 	*/
	setMedia: function(media) {
		this.component.setMedia(media);
		this.properties.media = media;
	},
	/**
 	* <p>the url to play</p>
 	*
 	* @method <a href="Titanium.Media.VideoPlayer.setUrl-method.html">setUrl</a>
 	* @param {String} url
 	*/
	setUrl: function(url) {
		this.component.setUrl(url);
		this.properties.url = url;
	},
	/**
 	* <p>stop playing the video</p>
 	*
 	* @method <a href="Titanium.Media.VideoPlayer.stop-method.html">stop</a>
 	*/
	stop: function() {
		this.component.stop();
	},
	/**
 	* <p>Returns a thumbnail at the given time as a blob.</p>
 	*
 	* @method <a href="Titanium.Media.VideoPlayer.thumbnailImageAtTime-method.html">thumbnailImageAtTime</a>
 	* @param {Double} time playback time
 	* @param {Integer} either [[Titanium.Media.VIDEO_TIME_OPTION_NEAREST_KEYFRAME]] or [[Titanium.Media.VIDEO_TIME_OPTION_EXACT]]
 	*/
	thumbnailImageAtTime: function(time, option) {
		return this.component.thumbnailImageAtTime(time, option);
	},
	/**
 	* return a Blob image of the rendered view
 	*
 	* @method <a href="Titanium.Media.VideoPlayer.toImage-method.html">toImage</a>
 	* @param {Function} cb function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
 	*/
	toImage: function(cb) {
		return this.component.toImage(cb);
	}
});
