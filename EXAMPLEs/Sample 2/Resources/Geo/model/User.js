metal.ns('geo.model.User');

/**
 *
 * @class User
 */
geo.model.User = metal.extend(Object, (function() {

    return {

        name: undefined,

        username: undefined,

        certificate: undefined,
        
        mac: undefined,
        
        phone: undefined,

        constructor: function(config) {
            metal.apply(this, config);

            geo.model.User.superclass.constructor.call(this);
        }
    };
})());



