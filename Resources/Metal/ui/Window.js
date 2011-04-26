metal.ns('metal.ui.Window');

/**
 *
 * @class metal.ui.Window
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.Window = metal.extend(metal.ui.AbstractWindow, {

	type: 'MetalWindow',

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
		id: 'MetalWindow_' + metal.generateId(),
		
		/**
		 * @override
		 * @property {String} title
		 */
		title: 'Metal Window'
	},

	/**
 	* The Titanium window this class wraps
 	*
 	* @property {Titanium.UI.Window} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('Window::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createWindow(metal.formatProperties(this.properties));
		
		// Call parent constructor
		metal.ui.Window.superclass.constructor.call(this);
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
	 * @method setLeftNavButton
	 * @param {metal.uj.Component} button
	 */
	setLeftNavButton: function(button) {
		this.leftNavButton = button;
		this.component.setLeftNavButton(metal.getView(button));
	},
	
	/**
	 * 
	 * @method setRightNavButton
	 * @param {metal.ui.Component} button
	 */
	setRightNavButton: function(button) {
		this.rightNavButton = button;
		this.component.setRightNavButton(metal.getView(button));
	}
	
	
});

