metal.ns('metal.util.location');

/**
 * This class handles all location related functions
 * 
 * @singleton
 * @class metal.util.location
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.util.location = (function() {

    /**
     * The last known location
     *
     * @private {Object} lastKnownLocation
     */
    var lastKnownLocation = {};

    return {

        /**
         * Get the device location
         *
         * @method getLocation
         */
        getLocation : function() {
            // Check for Geo Location status
            if (Ti.Geolocation.locationServicesEnabled == false) {
                // Geo Location is turned off
                Ti.UI.createAlertDialog({
                    title: geo.config.appName,
                    message:'Your device has geo turned off - please turn it on.'
                }).show();
            } else {
                // Geo Location is turned on
                
                // TODO [location] get location
            }

        },
        
        /**
         * Post the server this device's location
         *
         * @method sendLocation
         * @param {Object}
         */
        sendLocation : function(latlng) {
            // TODO [location] send location
        }
    };
})();
// Define an alias for less key strokes :)
metal.loc = metal.location;
