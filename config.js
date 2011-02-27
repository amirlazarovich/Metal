/**
 * Metal Configuration file
 * @author Amir Lazarovich
 * @version 0.1
 */
(function() {
	var config = {
		serverDomain : 'myDomain.com',
        serverPath: '/myServerPath',
        debugState: 4, // DEBUG
        cloudebug: false // Set Cloud debugging mode
    };
	
	// Apply metal configuration
	metal.initConfig(config);
})();
