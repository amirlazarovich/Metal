metal.ns('metal.ui');

/**
 *
 * @class metal.ui.ScrollableView
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.ScrollableView = metal.extend(metal.ui.AbstractView, (function() {
	
	/**
	 * @private
	 * @method stripMetalViews
	 * @param {Array} metalViews
	 * @returns {Array} titanium views
	 */ 
	function stripMetalViews(metalViews) {
		metalViews = metalViews || [];
		var views = [];
		// Stip metal views to titanium views
		for (var i = 0, iln = metalViews.length; i < iln; i++) {
			views.push(metal.getView(metalViews[i]));
		}
		
		return views;
	}
	
	return {

		type: 'MetalScrollableView',
	
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
			id: 'MetalScrollableView_' + metal.generateId(),
	
			/**
			* <p>the current page visible in the view</p>
			*
			* @property {int} currentPage
			*/
			currentPage: 0,
	
			/**
			* <p>the maximum zoom scale for the view</p>
			*
			* @property {float} maxZoomScale
			*/
			maxZoomScale: 1,
			/**
			* <p>the minimum zoom scale for the view</p>
			*
			* @property {float} minZoomScale
			*/
			minZoomScale: 1,
	
			/**
			* <p>the color of the paging control. defaults to black.</p>
			*
			* @property {string} pagingControlColor
			*/
			pagingControlColor: undefined,
			/**
			* <p>the height in pixels of the paging control, if visible. defaults to 20</p>
			*
			* @property {float} pagingControlHeight
			*/
			pagingControlHeight: undefined,
	
			/**
			* <p>boolean to indicate whether the paging control UI is visible</p>
			*
			* @property {boolean} showPagingControl
			*/
			showPagingControl: undefined,
			/**
			* <p>array of view objects to place in the view</p>
			*
			* @property {array} views
			*/
			views: undefined
		},
	
		/**
		* The Titanium view this class wraps
		*
		* @property {Titanium.UI.ScrollableView} component
		*/
		component: undefined,
	
		/**
		* @constructor
		* @param {Object} config
		*/
		constructor: function(config) {
			metal.overrideClass(this, config);
			dlog('ScrollableView::' + this.get('id'), 'constructor');
			
			// Support 'items' property along with 'views'
			// Strip metal views to Titanium ones
			this.properties.views = stripMetalViews(this.properties.items ? this.properties.items : this.properties.views);
				
			// Set Titanium component
			this.component = Ti.UI.createScrollableView(metal.formatProperties(this.properties));
	
			// Call parent constructor
			metal.ui.ScrollableView.superclass.constructor.call(this);
		},
		
		/**
		 * add a new view to the Scrollable View
		 * @method addView
		 * @param {metal.ui.View} view the view to add
		 */
		addView: function(view) {
			this.component.addView(metal.getView(view));
			this.get('views').push(view);
		},
		
		/**
		 * Remove an existing view from the Scrollable View
		 * @method removeView
		 * @param {metal.ui.View} view the view to remove
		 */
		removeView: function(view) {
			this.component.removeView(metal.getView(view));
			var views = this.get('views');
			views.splice(views.indexOf(view), 1);
		},
		
		/**
		 * scroll to a specific view
		 * @method scrollToView
		 * @param {int|metal.ui.View} viewOrIndex either an integer index or the view object to bring into view as the currentPage
		 */
		scrollToView: function(viewOrIndex) {
			this.component.scrollToView(metal.getView(viewOrIndex));
		}
	};	
})());

