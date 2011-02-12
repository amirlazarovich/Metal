/**
 *
 * @class metal.ui.Map
 */
metal.ui.Map = metal.extend(metal.ui.AbstractMetalView, (function() {

    return {
        /**
         * The id of this window
         *
         * @private
         * @property {String} id
         */
        id: 'MetalMap',

        type: 'MetalMap',

        /**
         * Holds all this view's properties
         *
         * @property {Object} properties
         */
        properties : {
            mapType: Titanium.Map.STANDARD_TYPE,
            animate: true,
            userLocation: false
        },

        /**
         * The native view this class wraps
         *
         * @property {Titanium.UI.View} view
         */
        view: undefined,

        markers: [],

        /**
         * @constructor
         */
        constructor: function(config) {
            if (config.markers) {
                this.markers = config.markers;
                delete config.markers;
            }

            metal.overrideClass(this, config);
            metal.debug.info('Map::' + this.id, 'constructor');

            // Set native component
            this.view = Ti.Map.createView(this.properties);

            // Call parent constructor
            metal.ui.Map.superclass.constructor.call(this);
        },
        
        initComponents: function() {
            var markers = this.markers;
            this.markers = new Array(markers.length);

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
            return marker && marker.type=="MetalMarker"
        },
        
        /**
         * Add marker to map
         * @private
         */
        addMarkerToMap: function(marker) {
            if (this.isMarker(marker)) {
                this.getView().addAnnotation(marker.getView());
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
                this.getView().removeAnnotation(marker.getView());

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