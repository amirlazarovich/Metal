/**
 *
 * @class metal.ui.Map
 */
metal.ui.Marker = metal.extend(metal.ui.AbstractMetalView, (function() {

    return {
        /**
         * The id of this window
         *
         * @private
         * @property {String} id
         */
        id: 'MetalMarker',

        type: 'MetalMarker',

        /**
         * Holds all this view's properties
         *
         * @property {Object} properties
         */
        properties : {
        	title: 'test',
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
        
        map: undefined,

        /**
         * @constructor
         */
        constructor: function(config) {
            metal.overrideClass(this, config);
            metal.debug.info('Map::' + this.id, 'constructor');

            // Set native component
            this.view = Ti.Map.createAnnotation(this.properties);
            
            // Call parent constructor
            metal.ui.Marker.superclass.constructor.call(this);
        },
        
        /**
         * Show the marker on the given map
         * 
         * @param {metal.ui.Map} map 
         */
        show: function(map){
        	this.map = map;
        	map.addMarker(this);
        },
        
        /**
         * Remove marker from the map
         */
        remove: function(){
        	if (this.map){
        		map.removeMarker(this);
        	}
        }
    };
})());