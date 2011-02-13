/**
 * Metal Configuration file
 */
(function() {
	var config = {
		serverDomain : 'myDomain.com',
        serverPath: '/myServerPath',
        debugState: 3, // DEBUG
        cloudebug: false // Set Cloud debugging mode
    };
	
	// Apply metal configuration
	metal.initConfig(config);
})();
