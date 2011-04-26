metal.ns('metal.ui');
/**
 * This class represents a coverflow view
 * 
 * @class CoverFlowView
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.CoverFlowView = metal.extend(metal.ui.AbstractView, {
	
	type: 'MetalCoverFlowView',

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
		id: 'MetalCoverFlowView_' + metal.generateId(),
		
		/**
	 	* <p>array of images to display in the view</p>
	 	*
	 	* @property {array} images
	 	*/
		images: undefined,
		
		/**
	 	* <p>index to make selected</p>
	 	*
	 	* @property {int} selected
	 	*/
		selected: 0
	},
	
	/**
 	* The Titanium view this class wraps
 	*
 	* @property {Titanium.UI.CoverFlowView} component
 	*/
	component: undefined,
	
	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('CoverFlowView::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createCoverFlowView(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.CoverFlowView.superclass.constructor.call(this);
	},
	
	/**
	 * change an image for a index
	 * @method setImage 
	 * @param {Integer} index index to change
	 * @param {Object} the image to set the index to. May be a TiBlob, TiFile, 
	 * 		URL, or dictionary with 'image' (may be any of TiBlob, TiFile, URL), 
	 * 		'width', 'height' keys. 'auto' is not allowed, only exact sizes (although 
 	 * 		a size may be omitted to keep the image at that size). If passed as a TiFile
 	 *  	or URL, will perform a check for '@2x' on Retina displays
	 */
	setImage: function(index, image) {
		this.component.setImage(index, image);
	}
});

