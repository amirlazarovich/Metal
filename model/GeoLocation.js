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
	 * @constructor
	 * @param {Float} lat
	 * @param {Float} lng
	 */
	constructor: function(config) {
		metal.apply(this, config);
		metal.debug.info('GeoLocation: (' + this.lat + ', ' + this.lng + ')', 'constructor');
		
		// Call parent
		metal.model.GeoLocation.superclass.constructor.call(this);
	},
	
	/**
	 * Return a string representation of this geo location
	 * 
	 * @method toString
	 */
	toString: function() {
		var adrs = this.address;
		return adrs.street + ' ' + adrs.streetNumber + adrs.city + ', ' + adrs.country;
	},
	
	/**
	 * @method get
	 * @param {String} name
	 */
	get: function(name) {
		return this[name] ? this[name] : this.address[name];
	}
});


