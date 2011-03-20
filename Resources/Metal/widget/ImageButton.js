metal.ns('metal.widget.ImageButton');

/**
 * @class metal.widget.ImageButton
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.widget.ImageButton = metal.extend(metal.ui.View, {

	/**
 	* @override
 	*/
	properties: {
		id: 'imagebutton_' + metal.generateId(),
		layout: 'vertical',
		height: 'auto',
		width: 'auto'
	},

	/**
 	* Whether or not to render the image before the
 	* label or the other way around
 	*
 	* @property {Boolean} renderImageFirst
 	* @default true
 	*/
	renderImageFirst: true,
	
	/**
	 * Whether or not to center the label when using
	 * horizontal layout
	 * 
	 * @property {Boolean} center
	 */
	centered: false,
	
	/**
 	* Whether or not to add a spacer between the image and
 	* label
 	*
 	* @property {Boolean} addSpacer
 	* @default true
 	*/
	addSpacer: true,

	/**
 	* Highlight the entire view
 	*
 	* @property {Object} highlight
 	* @default inactive
 	*/
	highlight: {
		active: false,
		color: 'blue'
	},

	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('ImageButton::' + this.get('id'), 'constructor');

		// Call parent constructor
		metal.widget.ImageButton.superclass.constructor.call(this);
	},
	/**
 	* @override
 	*/
	initComponents: function() {
		dlog('ImageButton::' + this.get('id'), 'initComponents');
		metal.widget.ImageButton.superclass.initComponents.call(this);

		// Get/Set images
		var images = {};
		var isHorizontal = this.get('layout') == 'horizontal';
		images.first = isHorizontal ? this.get('leftImage') : this.get('topImage');
		images.second = isHorizontal ? this.get('rightImage') : this.get('bottomImage');
		
		// Set default image
		if (this.get('image')) {
			images[this.renderImageFirst ? 'first' : 'second'] = this.get('image');
		}
		
		// Parse images
		for (var key in images) {
			if (images[key]) {
				if (metal.isString(images[key])) {
					// Image is only a url string
					images[key] = { backgroundImage: images[key] };
				} else if (images[key].url) {
					// User used the "url" notation -- transform this
					// into true property name
					images[key].backgroundImage = images[key].url;
					delete images[key].url;
				}
				// default image size
				metal.sapply(images[key], { height: 22, width: 22});
				images[key] = new metal.ui.View(images[key]);
			}
		}

		// Get/Set label
		var labelConfig = this.get('label') || { text: this.get('text') };
		metal.sapply(labelConfig, { height: 'auto', width: 'auto'});
		var label = new metal.ui.Label(labelConfig);

		// Add padding if using a horizontal layout
		if (isHorizontal) {
			var labelHeight = parseFloat(label.get('height')) || 0;
			var firstImageHeight = images.first ? parseFloat(images.first.get('height')) || 0 : 0;
			var secondImageHeight = images.second ? parseFloat(images.second.get('height')) || 0 : 0;
			var myHeight = parseFloat(this.get('height')) || 0;
			var maxHeight = Math.max(labelHeight, firstImageHeight, secondImageHeight, myHeight);
			if (maxHeight != 0) {
				// Exapnd the entire ImageButton view's height
				// and center its components vertically
				var newHeight = maxHeight + 6;
				var labelPadding = (newHeight - labelHeight) / 2;
				var firstImagePadding = (newHeight - firstImageHeight) / 2;
				var secondImagePadding = (newHeight - secondImageHeight) / 2;
				
				this.set('height', newHeight);
				label.set('top', labelPadding);
				if (images.first) {
					images.first.set('top', firstImagePadding);
				}
				if (images.second) {
					images.second.set('top', secondImagePadding);
				}
			}
			
			// Center label if needed
			if (this.centered) {
				var firstImageWidth = images.first ? parseFloat(images.first.get('width')) || 0 : 0;
				var secondImageWidth = images.second ? parseFloat(images.second.get('width')) || 0 : 0;
				var myWidth = parseFloat(this.get('width')) || 0;
				var totalWidth = myWidth - firstImageWidth - secondImageWidth;
				label.set('width', totalWidth);
				label.set('textAlign', 'center');
			}
		}

		// Set entire components
		var components = [];
		var spacer = { type: 'spacer', padding: 5 };
		if (images.first) {
			components.push(images.first);
			if (isHorizontal && this.addSpacer) {
				components.push(spacer);
			}
		}
		components.push(label);
		if (images.second) {
			if (isHorizontal && this.addSpacer) {
				components.push(spacer);
			}
			components.push(images.second);
		}

		// Add components to this view
		this.add(components);
	},
	/**
 	* @override
 	*/
	initEvents: function() {
		dlog('ImageButton::' + this.get('id'), 'initEvents');
		metal.widget.ImageButton.superclass.initEvents.call(this);
		var me = this;

		if (me.highlight.active) {
			var baseColor = me.get('backgroundColor');
			me.on('touchstart', function() {
				me.set('backgroundColor', me.highlight.color);
			});
			me.on('touchend', function() {
				me.set('backgroundColor', baseColor);
			});
		}

	}
});
