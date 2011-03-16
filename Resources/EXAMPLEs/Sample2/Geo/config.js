metal.ns('geo.config');

/**
 * Global configuration file
 *
 * @class config
 */
geo.config = (function() {

    return {
        serverDomain : 'http://myDomain.com',
        serverPath: '/myServerPath',
        debugState: 3, // DEBUG
        cloudebug: false, // Set Cloud debugging mode
        appName: 'Geo Manage',
        
        /**
         * Web Services urls
         * 
         * @property
         */
        urls: {
          login: this.serverDomain + this.serverPath + '/login'
        },
        
        /**
         * Get a web service url
         * 
         * @method get
         * @param {String} action
         */
        get: function(action) {
          return this.urls[action];
        }
    };
})();

