/**
 * @class metal.geo.Bounds
 * @author Daniel Kloosterman
 * @version 0.1
 */
metal.geo.Bounds = metal.extend(Object, (function(){
	
	return {
		/**
		 * Constructor
		 * 
		 * @constructor
		 */
		constructor: function(){
			this.items = [];
		},
		
		/**
		 * Check if this bounds is empty
		 * 
		 * @method isEmpty
		 * @returns {Boolean}
		 */
		isEmpty: function(){
			return (this.items.length == 0);
		},
		
		/**
		 * Extend the bounds with more points
		 * 
		 * @param {Array/metal.geo.LatLng} arguments An array or a list of points
		 */
		extend: function(){
			
		},
		
		/**
		 * Get the center of this bounds
		 * @return {metal.geo.LatLng}
		 */
		getCenter: function(){
			return new metal.geo.LatLng(
				(this.ne.lat + sw.lat) / 2,
				(this.ne.lng + this.sw.lng) / 2
			);
		},
		
		/**
		 * Get the NorthEast point
		 * 
		 * @method getNorthEast
		 * @returns {metal.geo.LatLng}
		 */
		getNortEast: function(){
			return this.ne;
		},
		
		/**
		 * Get the soutwest point
		 * 
		 * @method getSouthWest 
		 * @returns {metal.geo.LatLng}
		 */
		getSouthWest: function(){
			return this.sw;
		}
	};
})());
