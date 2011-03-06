metal.ns('metal.ui.Map');
/**
 *
 * @class metal.ui.Map
 * @author Daniel Kloosterman
 * @version 0.1
 */
metal.ui.Map = metal.extend(metal.ui.AbstractView, (function() {

	return {

		type: 'MetalMap',

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
			id: 'MetalMap',

			/**
 			* <p>boolean is mapping actions should be animated</p>
 			*
 			* @property {boolean} animate
 			*/
			animate: true,

			/**
 			* <p>an array of annotations to add to the map</p>
 			*
 			* @property {array} annotations
 			*/
			annotations: undefined,

			/**
 			* <p>a dictionary that specifies the following properties specifying the region location to set the map: <tt>latitudeDelta</tt>, <tt>longitudeDelta</tt>, <tt>latitude</tt>, <tt>longitude</tt>.</p>
 			*
 			* @property {object} location
 			*/
			location: undefined,
			/**
 			* <p>the map type constant of either <a href="Titanium.Map.STANDARD_TYPE-property.html">Titanium.Map.STANDARD_TYPE</a>, <a href="Titanium.Map.SATELLITE_TYPE-property.html">Titanium.Map.SATELLITE_TYPE</a> or <a href="Titanium.Map.HYBRID_TYPE-property.html">Titanium.Map.HYBRID_TYPE</a>.</p>
 			*
 			* @property {int} mapType
 			*/
			mapType: Titanium.Map.STANDARD_TYPE,

			/**
 			* <p>a dictionary that specifies the following properties specifying the region location to set the map: <tt>latitudeDelta</tt>, <tt>longitudeDelta</tt>, <tt>latitude</tt>, <tt>longitude</tt>.</p>
 			*
 			* @property {object} region
 			*/
			region: undefined,
			/**
 			* <p>boolean to indicate if the map should attempt to fit the map view into the region in the visible view</p>
 			*
 			* @property {boolean} regionFit
 			*/
			regionFit: undefined,

			/**
 			* <p>boolean to indicate if the map should show the user's current device location as a pin on the map</p>
 			*
 			* @property {boolean} userLocation
 			*/
			userLocation: true

		},

		/**
 		* The Titanium view this class wraps
 		*
 		* @property {Titanium.UI.View} component
 		*/
		component: undefined,

		markers: [],

		/**
 		* @constructor
 		*/
		constructor: function(config) {
			metal.overrideClass(this, config);
			dlog('Map::' + this.get('id'), 'constructor');

			// Set Titanium component
			this.component = Ti.Map.createView(metal.formatProperties(this.properties));

			// Call parent constructor
			metal.ui.Map.superclass.constructor.call(this);
		},
		/**
 		* @override
 		* @method initComponents
 		*/
		initComponents: function() {
			var markers = this.markers;
			this.markers = [];

			if (markers) {
				this.addMarker(markers);
			}
		},
		/**
 		* Add marker to this map
 		*
 		* @param {Array/metal.ui.Marker} markers Marker(s) to add
 		*/
		addMarker: function(markers) {
			if (metal.isArray(markers)) {
				for (var i=0;i<markers.length;i++) {
					this.addMarkerToMap(markers[i]);
				}
			} else {
				this.addMarkerToMap(markers);
			}
		},
		/**
 		* Check if a marker is a marker
 		*/
		isMarker: function (marker) {
			return marker && marker.type=="MetalMarker";
		},
		/**
 		* Add marker to map
 		* @private
 		*/
		addMarkerToMap: function(marker) {
			if (this.isMarker(marker)) {
				this.getView().addAnnotation(marker.getComponent());
				this.markers.push(marker);
				marker.map = this;
			} else {
				throw new Error("Marker is not a a type of metal.ui.Marker");
			}
		},
		/**
 		* Remove markers
 		*/
		removeMarker: function(markers) {
			if (metal.isArray(markers)) {
				for (var i=0;i<markers.lenght;i++) {
					removeMarkerFromMap(markers[i]);
				}
			} else {
				removeMarkerFromMap(markers);
			}
		},
		/**
 		* Remove a marker from the map
 		* @private
 		*/
		removeMarkerFromMap: function (map, marker) {
			if (isMarker(marker)) {

				// Remove from map
				this.getView().removeAnnotation(marker.getComponent());

				// Remove item from list
				this.markers.splice(map.markers.indexOf(marker),1);

				// Set map to null
				marker.map = null;
			} else {
				throw new Error("Marker is not a a type of metal.ui.Marker");
			}
		},
		clearMarkers: function() {
			this.removeMarker(this.markers);
		}
	};
})());