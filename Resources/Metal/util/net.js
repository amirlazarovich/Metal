metal.ns('metal.util.net');

/**
 * This class handles all HTTP requests
 *
 * @singleton
 * @class metal.util.net
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.util.net = (function() {

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
      		parameters += (parameters == '?') ? p + '=' + params[p] : '&' + p + '=' + params[p];	
      	}
      }
      
      return parameters;
    };

    return {
        SUCCESS: 1,
        
        /**
         * @method encodeUri
         * @param {String} value
         */
        encodeUri: function(value) {
        	return Titanium.Network.encodeURIComponent(value);
        },
        
        /**
         * @method decodeUri
         * @param {String} value
         */
        decodeUri: function(value) {
        	return Titanium.Network.decodeURIComponent(value);
        },
        
        /**
         * Perform HTTP GET request
         *
         * @method get
         * @param {String} url
         * @param {Object} params
         * @param {Function ({Boolean} success, {Object} response)} cb Callback function to handle HTTP response
         * @param [optional] {String} mockup The name of the mockup response (i.e. success/failure/etc.)
         */
        get: function(url, params, cb, auth, mockup) {
            // If mockup flag was sent, send dummy values
            if (!metal.isUndefined(mockup)) {
              dlog('net', 'mockup: ' + mockup);
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
               dlog('net', 'Load data success. url: ' + url);
               cb(/* isSuccess? */ true, xhr.responseText);
            };
            
            // Callback on failed request
            xhr.onerror = function(e) {
                wlog('net', 'Load data failed!. url: ' + url + '. Error: ' + e.error);
                cb(/* isSuccess? */ false, {message: xhr.status});
            };
            
            xhr.open("GET", url);
            
            // Set basic authentication
            if (!metal.isNothing(auth)) {
            	var authstr = 'Basic ' + metal.base64.encode(auth.identity + ':' + auth.secret);  
				xhr.setRequestHeader('Authorization', authstr); 	
            }
            
            xhr.send();
        },
        
        /**
         * Perform HTTP GET request
         *
         * @method get
         * @param {String} url
         * @param {Object} params
         * @param {Function ({Boolean} success, {Object} response)} cb Callback function to handle HTTP response
         * @param [optional] {String} mockup The name of the mockup response (i.e. success/failure/etc.)
         */
        post: function(url, getParams, postParams, cb, auth, streamCb) {
            streamCb = streamCb || function() {};
            var xhr = Titanium.Network.createHTTPClient();
            
            var parameters = formatParameters(getParams);
            // Set GET parameters
            url += parameters;
            
            // Callback on successful request
            xhr.onload = function() {
               dlog('net', 'Load data success. url: ' + url);
               cb(/* isSuccess? */ true, xhr.responseText);
            };
            
            // Callback on failed request
            xhr.onerror = function(e) {
                wlog('net', 'Load data failed!. url: ' + url + '. Error: ' + e.error);
                cb(/* isSuccess? */ false, {message: xhr.status});
            };
            
            xhr.onsendstream = function(e) {
            	dlog('net', 'on send stream - Progress: ' + e.progress);
            	streamCb(e.progress);
			};
            
            xhr.open("POST", url);
            
            // Set basic authentication
            if (!metal.isNothing(auth)) {
            	var authstr = 'Basic ' + metal.base64.encode(auth.identity + ':' + auth.secret);  
				xhr.setRequestHeader('Authorization', authstr); 	
            }
            
            xhr.send(postParams);
        }
    };

})();
