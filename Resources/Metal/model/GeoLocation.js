metal.ns('metal.model.GeoLocation');

/**
 * 
 * @class metal.model.GeoLocation
 * @author Amir Lazarovich
 * @version 0.1
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
		dlog('GeoLocation: (' + this.lat + ', ' + this.lng + ')', 'constructor');
		
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
	 * @param {String} key
	 */
	get: function(key) {
		return this[key] ? this[key] : this.address[key];
	},
	
	/**
	 * @method set
	 * @param {String} key
	 * @param {Object} value
	 */
	set: function(key, value) {
		if (this[key]) {
			this[key] = value;
		} else {
			this.address[key] = value;
		}
	}
});


