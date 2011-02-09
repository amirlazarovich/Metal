metal.ns('metal.model.GeoLocation');

/**
 * 
 * @class Location
 */
metal.model.GeoLocation = metal.extend(Object, {
	
	/**
	 * @property {Float} lat
	 */
	lat: null,
	
	/**
	 * @property {Float} lng
	 */
	lng: null,
	
	/**
	 * @property {Object} address 
	 */
	address: {
		country: '',
		city: '',
		street: '',
		streetNumber: ''
	},
	
	/**
	 * Return a string representation of this geo location
	 * 
	 * @method toString
	 */
	toString: function() {
		var adrs = this.address;
		return adrs.street + ' ' + adrs.streetNumber + adrs.city + ', ' + adrs.country;
	}
});


