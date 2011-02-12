metal.geo.LatLng = metal.extend(Object, (function(){
	
	/**
	 * Calculate the distance between two points
	 * @private
	 */
	 //TODO finish!
	function calcDistance(fromLL, toLL){
		return 1;
	}
	
	return {
		/**
		 * Constructor
		 * 
		 * @param {Number} lat latitude
		 * @param {Number} lng longitude
		 */
		constructor: function(lat,lng){
			this.lat = lat;
			this.lng = lng;
		},
		
		/**
		 * Check if an object equals this object
		 * 
		 * @param {metal.geo.LatLng} ll Latitude/Longitude to check
		 * @returns {Number}
		 */
		equals: function(ll){
			return (ll instanceof metal.geo.LatLng) && (ll.lat == this.lat && ll.lng == this.lng);
		},
		
		/**
		 * Returns the latitude
		 * 
		 * @returns {Number}
		 */
		lat: function(){
			return this.lat;
		},
		
		/**
		 * Returns the longitude
		 * 
		 * @returns {Number}
		 */
		lng: function(){
			return this.lng;
		},
		
		/**
		 * Calculate the distance between two points
		 * 
		 * @param {metal.geo.LatLng} ll
		 */
		distanceTo: function(ll){
			return calcDistance(this, ll);
		}
	}
})());
