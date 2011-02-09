/**
 * This class handles all HTTP requests
 *
 * @singleton
 * @class net
 */
metal.net = (function() {

    /**
     * Format parameters to send in a GET request
     * 
     * @private
     * @param {Object} params 
     */
    function formatParameters(params) {
      var parameters = '?';
      
      for (var p in params) {
      	if (params.hasOwnProperty(p)) {
      		parameters += (parameters == '?')? params[p] : '&' + params[p];	
      	}
      }
      
      return parameters;
    };

    return {
        SUCCESS: 1,
        
        /**
         * Perform HTTP GET request
         *
         * @method get
         * @param {String} url
         * @param {Object} params
         * @param {Function ({Boolean} success, {Object} response)} cb Callback function to handle HTTP response
         * @param [optional] {String} mockup The name of the mockup response (i.e. success/failure/etc.)
         */
        get: function(url, params, cb, mockup) {
            // If mockup flag was sent, send dummy values
            if (typeof mockup != 'undefined') {
              metal.debug.info('net', 'mockup: ' + mockup);
              if (mockup == 'all') {
                cb(true, test.net.get('success'));
                cb(true, test.net.get('new'));
                cb(true, test.net.get('failure'));
                cb(true, test.net.get('error'));
              } else {
                cb(true, test.net.get(mockup));  
              }
              return;
            }
            
            var xhr = Titanium.Network.createHTTPClient();
            
            var parameters = formatParameters(params);
            // Set GET parameters
            url += parameters;
            
            // Callback on successful request
            xhr.onload = function() {
               metal.debug.info('net', 'Load data success. url: ' + url);
               cb(/* isSuccess? */ true, xhr.responseText);
            };
            
            // Callback on failed request
            xhr.onerror = function(e) {
                metal.debug.info('net', 'Load data failed!. url: ' + url + '. Error: ' + e.error);
                cb(/* isSuccess? */ false, {message: xhr.status});
            };
            
            xhr.open("GET", url);
            xhr.send();
        }
    };

})();
