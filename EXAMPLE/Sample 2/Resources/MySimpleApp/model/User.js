metal.ns('simple.model.User');

/**
 *
 * @class User
 */
simple.model.User = metal.extend(Object, (function() {

    return {

        name: undefined,

        username: undefined,

        certificate: undefined,
        
        mac: undefined,
        
        phone: undefined,
		
		/**
		 * @override
		 */
        constructor: function(config) {
            metal.apply(this, config);
			
			// Call parent
            simple.model.User.superclass.constructor.call(this);
        }
    };
})());



