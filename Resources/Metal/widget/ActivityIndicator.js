metal.ns('metal.widget.ActivityIndicator');

/**
 * 
 * @class metal.widget.AcitivityIndicator
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.widget.ActivityIndicator = metal.extend(metal.ui.AbstractView, {
	type: 'MetalActivityIndicator',
	
	/**
	 * @const {Integer} BIG_WIDTH
	 */
	BIG_WIDTH: 40,
	
	/**
	 * @const {Integer} NORMAL_WIDTH
	 */
	NORMAL_WIDTH: 25,
	
	/**
	 * @const {Integer} HEIGHT
	 */
	HEIGHT: 20,
	
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
		id: 'MetalActivityIndicator_' + metal.generateId(),
		/**
		* the background color of the view
		*
		* @property {string} backgroundColor
		*/
		backgroundColor: 'transparent',
		/**
	 	* <p>the color of the message label</p>
	 	*
	 	* @property {string} color
	 	*/
		color: undefined,
		/**
	 	* <p>the font object for the activity message label</p>
	 	*
	 	* @property {object} font
	 	*/
		font: undefined,
		/**
	 	* <p>the activity message label text</p>
	 	*
	 	* @property {string} message
	 	*/
		message: undefined,
		/**
	 	* <p>the key in the locale file to use for the message property</p>
	 	*
	 	* @property {string} messageid
	 	*/
		messageid: undefined,
		/**
	 	* <p>the style constant of the activity indicator</p>
	 	*
	 	* @property {int} style
	 	*/
		style: {
			value: undefined,
			format: function() {
				if (metal.osname == 'iphone') {
					return this.value || metal.ui.iphone.indicatorStyle.PLAIN;
				} else {
					return this.value;
				}
			}
		}
	},
	
	/**
	 * Define whether or not to use the simple activity indicator
	 * 
	 * @property {Boolean} plain
	 * @default false
	 */
	plain: false,
	
	
	/**
 	* The Titanium view this class wraps
 	*
 	* @property {Titanium.UI.ActivityIndicator} component
 	*/
	component: undefined,
	
	/**
	 * This class may be wrapped inside a metal.ui.View
	 * 
	 * @property {metal.ui.View|Titanium.UI.View} view 
	 */
	label: undefined,
	
	/**
	 * The activity indicator
	 * 
	 * @property {Titanium.ui.ActivityIndicator} indicator
	 */
	indicator: undefined,
	
	/**
 	* @constructor
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('ActivityIndicator::' + this.get('id'), 'constructor');
		
		// Set native components
		if (this.plain === true) {
			// Simple version of an activity indicator
			this.component = Titanium.UI.createActivityIndicator(metal.formatProperties(this.properties));
			this.set('width', (this.get('style', true) === metal.ui.iphone.indicatorStyle.BIG) ? this.BIG_WIDTH : this.NORMAL_WIDTH);
			this.set('height', this.HEIGHT);
		} else {
			// Complex version
			// The indicator will be wrapped inside a metal.ui.View and centered next to a
			// potential (if given) label as its message
			this.component = Titanium.UI.createView(metal.formatProperties(this.properties));
			this.indicator = Titanium.UI.createActivityIndicator(this.indicator || { 
				style: this.get('style', true),
				width: (this.get('style', true) === metal.ui.iphone.indicatorStyle.BIG) ? this.BIG_WIDTH : this.NORMAL_WIDTH,
				height: this.HEIGHT
			});
			
			if (this.get('message')) {
				// Set label
				this.label = new metal.ui.Label(this.get('message'));
			}
		}
		
		// Call parent constructor
		metal.widget.ActivityIndicator.superclass.constructor.call(this);
	},
	
	initComponents: function() {
		metal.widget.ActivityIndicator.superclass.initComponents.call(this);
		
		if (this.label) {
			// Set label along with the activity indicator
			var thisWidth = this.get('width');
			var labelWidth = this.label.toImage().width;
			var indWidth = this.indicator.width;
			var padding = 10;
			// Add all components			
			this.add(
				new metal.ui.View({
					layout: 'horizontal',
					width: thisWidth,
					top: (this.get('height') / 2) - (this.indicator.height / 2),
					left: (thisWidth - labelWidth - indWidth - 10) / 2,
					items: [
						this.indicator,
						this.label
					]
				})
			);
		} else {
			// Add only the activity indicator
			this.add(this.indicator);
		}
	},
	
	/**
 	*
 	* @method get
 	* @param {String} name
 	* @param {Boolean} formatted
 	*/
	get: function(name, formatted) {
		var prop;
		if (this.label && ['message', 'color', 'font'].join().indexOf(name) != -1) {
			// We're using a label next to our indicator
			// thus, change the value from message to text since
			// that is the true name of our property
			name = name === 'message' ? 'text' : name;
			
			// Label text
			prop = this.label.get(name);
		} else if (name === 'style') {
			// Indicator style
			prop = this.indicator ? this.indicator[name] : this.component[name]; 
		} else if (this.isTitaniumProperty(name) && !this.isDiscarded(name)) {
			prop = this.properties[name];
			if (prop && prop.hasOwnProperty && prop.hasOwnProperty('value')) {
				// The value of this property is nested inside an object
				prop = (formatted && prop.format) ? prop.format() : prop.value;
			}
		} else {
			// Metal property
			prop = this[name];
		}
		return prop;
	},
	
	/**
 	*
 	* @method set
 	* @param {String or Object} nameOrObject
 	* @param {Object} value
 	*/
	set: function(nameOrObject, value) {
		if (metal.isObject(nameOrObject)) {
			// Object
			metal.overrideClass(this, nameOrObject);
			// TODO [ActivityIndicator::set] Setting an object - need to override wrapped component
		} else {
			// Name
			if (this.label && ['message', 'color', 'font'].join().indexOf(nameOrObject) != -1) {
				// We're using a label next to our indicator
				// thus, change the value from message to text since
				// that is the true name of our property
				nameOrObject = nameOrObject === 'message' ? 'text' : nameOrObject;
				
				// Label text
				this.label.set(nameOrObject, value);
			} else if (nameOrObject === 'style') {
				// Indicator style
				if (this.indicator) {
					this.indicator[nameOrObject] = value;
				} else {
					this.component[nameOrObject] = value;
				}
			} else if (this.isTitaniumProperty(nameOrObject)) {
				this.component[nameOrObject] = metal.getView(value);
			} 
			
			if (this.isDiscarded(nameOrObject)) {
				this[nameOrObject] = value;
			} else {
				this.properties[nameOrObject] = value;
			}
		}
	},
	
	/**
	 * call hide to make the activity indicator hidden and stop spinning
	 * 
	 * @method hide
	 */
	hide: function() {
		this.component.hide();
		if (this.indicator) {
			this.indicator.hide();
		}
	},
	
	/**
	 * call show to make the activity indicator visible and start spinning
	 * 
	 * @method show
	 */
	show: function() {
		this.component.show();
		if (this.indicator) {
			this.indicator.show();
		}
	}
});
