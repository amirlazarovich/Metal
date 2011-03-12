metal.ns('metal.ui.Marker');
/**
 *
 * @class metal.ui.Marker
 * @author Daniel Kloosterman
 * @version 0.1
 */
metal.ui.Marker = metal.extend(metal.ui.Component, (function() {

	return {
		type: 'MetalMarker',

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
			id: 'MetalMarker_' + metal.generateId(),

			/**
 			* <p>boolean to indicate whether the pin should animate when dropped</p>
 			*
 			* @property {boolean} animate
 			*/
			animate: true,
			/**
 			* <p>image view for the pin instead of default image. currently only supported in iphone</p>
 			*
 			* @property {string} image
 			*/
			image: undefined,
			
			/**
			 * @property {Float} latitude
			 */
			latitude: undefined,
			
			/**
 			* <p>the left button image on the annotation. must either be a button type constant or url</p>
 			*
 			* @property {int,string} leftButton
 			*/
			leftButton: undefined,
			/**
 			* <p>a left view that is displayed on the annotation</p>
 			*
 			* @property {object} leftView
 			*/
			leftView: undefined,
			
			/**
			 * @property {Float} longitude
			 */
			longitude: undefined,
			
			/**
 			* <p>the pin color as one of <a href="Titanium.Map.ANNOTATION_RED.html">Titanium.Map.ANNOTATION_RED</a>, <a href="Titanium.Map.ANNOTATION_GREEN.html">Titanium.Map.ANNOTATION_GREEN</a> or <a href="Titanium.Map.ANNOTATION_PURPLE.html">Titanium.Map.ANNOTATION_PURPLE</a>.</p>
 			*
 			* @property {int} pincolor
 			*/
			pincolor: undefined,
			/**
 			* <p>the right button image on the annotation. must either be a button type constant or url</p>
 			*
 			* @property {int,string} rightButton
 			*/
			rightButton: undefined,
			/**
 			* <p>a right view that is displayed on the annotation</p>
 			*
 			* @property {object} rightView
 			*/
			rightView: undefined,
			/**
 			* <p>the secondary title of the annotation view</p>
 			*
 			* @property {string} subtitle
 			*/
			subtitle: null,
			/**
 			* <p>the key in the locale file to use for the subtitle property</p>
 			*
 			* @property {string} subtitleid
 			*/
			subtitleid: undefined,
			/**
 			* <p>the primary title of the annotation view</p>
 			*
 			* @property {string} title
 			*/
			title: null,
			/**
 			* <p>the key in the locale file to use for the title property</p>
 			*
 			* @property {string} titleid
 			*/
			titleid: undefined

		},

		/**
 		* The Titanium view this class wraps
 		*
 		* @property {Titanium.UI.View} component
 		*/
		component: undefined,

		map: undefined,

		/**
 		* @constructor
 		*/
		constructor: function(config) {
			metal.overrideClass(this, config);
			dlog('Map::' + this.get('id'), 'constructor');

			// Set Titanium component
			this.component = Ti.Map.createAnnotation(metal.formatProperties(this.properties));

			// Call parent constructor
			metal.ui.Marker.superclass.constructor.call(this);
		},
		/**
 		* Show the marker on the given map
 		*
 		* @param {metal.ui.Map} map
 		*/
		show: function(map) {
			this.map = map;
			map.addMarker(this);
		},
		/**
 		* Remove marker from the map
 		*/
		remove: function() {
			if (this.map) {
				map.removeMarker(this);
			}
		}
	};
})());