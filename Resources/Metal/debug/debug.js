/**
 * Cloud debugging tool
 *
 * @include cloudebug.js
 */
Ti.include("/Metal/debug/cloudebug.js");

// Define namepsace
metal.ns('metal.debug');

/**
 * Static singleton class for debugging
 *
 * @class debug
 * @singleton
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.debug = (function() {

    /**
     * @const {tcpClient} cloud
     */
    var cloud;
    
    /**
     * Fetch all this controls components
     * 
     * @param {Object} thisControl
     * @param [optional] {String} gap
     */
    function deepSearch(thisControl, gap) {
        var msg = '\n';
        gap = gap || '';
        for (var prop in thisControl) {
        	if (true) { // Suppress warning :)
        		var value = thisControl[prop];
	            switch (typeof value) {
	                case "function":
	                    //msg +=  typeof value + ": " + prop + " = " + value + "\n";
	                    break;
	
	                case "object":
	                    for (var prop2 in value) {
	                    	if (true) { // Suppress warning :)
	                    		var value2 = value[prop2];
		                        if (prop2 == "supr") {
		                            var isGap = gap != '';
		                            msg += gap + "[Superclass]:: [" + deepSearch(value2(), (isGap? '+' + gap : '+   ')) + ']\n';
		                            continue;
		                        }
		
		                        switch (typeof value2) {
		                            case "function":
		                                msg += gap + '[Function] ' + prop2 + ' = ' + value2 + '\n';
		                                break;
		                            case 'object':
		                                msg += gap + '[Property] ' + prop + ': {' + typeof value2 + '} ' + prop2 + ' = ' + value2 + '\n';
		                                break;
		                            default:
		                                msg += gap + '[Inside-Property] ' + prop + ': {' + typeof value2 + '} ' + prop2 + ' = ' + value2 + '\n';
		                                break;
		                        }
	                    	} 
	                        
	                    }
	                    break;
	
	                default:
	                    //msg += 'Property' + ': {' + typeof value + '} ' + prop + ' = ' + value + '\n';
	                    break;
	
	            }
        	} 
            
        }

        return msg;
    }

    return {

        /**
         * @const {Integer} NONE
         */
        NONE : 0,

        /**
         * @const {Integer} DEBUG
         */
        DEBUG : 4,

        /**
         * @const {Integer} INFO
         */
        INFO : 3,
		
		/**
         * @const {Integer} WARN
         */
        WARN : 2,
		
        /**
         * @const {Integer} ERROR
         */
        ERROR : 1,

        /**
         *
         * @property {Integer} state
         * @default false
         */
        state : metal.DEBUG_STATE,

        /**
         * Cloud debugging active state
         *
         * @private
         * @property {Boolean} cloudebug
         * @default false
         */
        cloudebug: false,
        
        /**
         * Get the code behind required threshold
         * 
         * @method get
         * @param {String} threshold
         */
        get: function(threshold) {
        	var me = metal.debug;
        	var result;
        	switch (threshold) {
        		case 'none':
        			result = me.NONE;
        			break;
    			
    			case 'debug': 
    				result = me.DEBUG;
    				break;
    				
				case 'info': 
					result = me.INFO;
					break;
					
				case 'warn':
					result = me.WARN;
					break;
					
				case 'error':
					result = me.ERROR;
					break;
					
				default: 
					result = me.NONE;
        	}
        	
        	return result;
        },
		
		forceLog: function(msg, obj, stringify) {
			if (obj != undefined) {
				var more = (stringify != undefined)? 
					(': ' + JSON.stringify(obj)) :
				 	(': ' + deepSearch(obj));  
				msg += more;
			}
			Ti.API.info('[--------------Read me--------------] ' + msg);
		},
		
		/**
		 * General log write
		 * 
		 * Sample uses:
		 * metal.debug.log('debug', 'hello'); // Plain message
		 * metal.debug.log('debug', 'hello', {test: 'hi'}); // Stringify the object
		 * metal.debug.log('debug', 'hello', new metal.ui.Window(), true); // Perform a deep search
		 * metal.debug.log('debug', 'my window', 'hello'); // Result: [my window] hello
		 * metal.debug.log('debug', 'my window', {test: 'hi'}); // Result: [my window] {test: 'hi'}
		 * metal.debug.log('debug', 'my window', new metal.ui.Window(), true); // Result: [my window] ...
		 * 
		 * 
		 * @method log
		 * @param {String} threshold The log threshold level
		 * @param {String/Object} 
		 * 		String: A plain message or if any other parameters
		 * 				are sent, then it will be the location (meaning,
		 * 				it will be surrounded by [brackets]
		 * 		Object: an object that needs to be stringified or deep searched 
		 * @param {String/Object/Boolean} 
		 * 		String: A plain message
		 * 		Object: An object that needs to be stringified or deep searched
		 * 		Boolean: Whether or not to perform deep search on given object
		 * @param {Boolean} Whether or not to perform deep search on given object
		 * 
		 * @see metal.debug.info
		 * @see metal.debug.debug
		 * @see metal.debug.warn
		 * @see metal.debug.error
		 */
		log: function(threshold) {
            if (this.state >= this.get(threshold)) {
				var msg = '';
				var arg;
				var nextArg;
				for (var i = 1, iln = arguments.length; i < iln; i++) {
					arg = arguments[i];
					nextArg = arguments[i + 1];
					if (i == 1 && metal.isString(arg) && !metal.isNothing(nextArg)) {
						// Wrap first argument inside [brackets]
						msg += '[' + arg + '] ';
					} else if (metal.isObject(arg) && metal.isTrue(nextArg)) {
						// Deep search inside given object
						msg += deepSearch(arg);
						// Increment the counter since we already handled the next value
						i++;
					} else if (metal.isObject(arg)) {
						// Stringify object
						msg += JSON.stringify(arg);
					} else {
						// String
						msg += arg + ' ';
					}
				}
				
				// Send to log
				Ti.API[threshold](msg);
				
				if (this.cloudebug == true) {
					// Send to cloud log
                    cloud.write('[' + threshold + '] ' + msg);
                }
			}
		},
		
		/**
		 * @method debug
		 * @see metal.debug.log
		 */
		debug: function() {
			var args = ['debug'];
			for (var i = 0, iln = arguments.length; i < iln; i++) {
				args.push(arguments[i]);
			}
			metal.debug.log.apply(metal.debug, args);
		},
		
		/**
		 * @method info
		 * @see metal.debug.log
		 */
		info: function() {
			var args = ['info'];
			for (var i = 0, iln = arguments.length; i < iln; i++) {
				args.push(arguments[i]);
			}
			metal.debug.log.apply(metal.debug, args);
		},
		
		/**
		 * @method warn
		 * @see metal.debug.log
		 */
		warn: function() {
			var args = ['warn'];
			for (var i = 0, iln = arguments.length; i < iln; i++) {
				args.push(arguments[i]);
			}
			metal.debug.log.apply(metal.debug, args);
		},
		
		/**
		 * @method error
		 * @see metal.debug.log
		 */
		error: function() {
			var args = ['error'];
			for (var i = 0, iln = arguments.length; i < iln; i++) {
				args.push(arguments[i]);
			}
			metal.debug.log.apply(metal.debug, args);
		},
		
        /**
         * Initialize cloud debugging
         */
        initCloudebug : function() {
            // Connect to cloud debug if not already connected
            if (typeof cloud == "undefined") {
                var me = this;
                cloud = new tcpClient('251b3302-6fe6-4b25-9bc6-c7bfee2adfe7');
                cloud.newSocket();
                cloud.connect( function(e) {
                    me.info('debug', 'Cloudebug started');
                    me.cloudebug = true;
                });
            } else {
                this.info("Trying to start cloudebug... check your code!");
            }

        }
    };

})();
// If Cloud debugging is set to true, initialize it
if (metal.CLOUD_DEBUG == true) {
    metal.debug.initCloudebug();
}

// Create alias for less key stokes :)
this.flog = metal.debug.forceLog;
this.dlog = metal.debug.debug;
this.ilog = metal.debug.info;
this.wlog = metal.debug.warn;
this.elog = metal.debug.error;