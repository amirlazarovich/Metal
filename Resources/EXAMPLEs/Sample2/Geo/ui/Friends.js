metal.ns('geo.ui.Friends');

/**
 *
 * @class Friends
 */
geo.ui.Friends = metal.extend(metal.ui.Window, {

    id: 'friends',

    properties: {
        title: 'Friends',
        backgroundColor: 'white',
        barColor: 'black',
        fullscreen: true
    },

    constructor: function(config) {
        metal.overrideClass(this, config);
        dlog('Friends::' + this.get('id'), 'constructor');

        // Call parent constructor
        geo.ui.Friends.superclass.constructor.call(this);
    },
    initComponents: function() {
        dlog('Friends::' + this.get('id'), 'initComponents');
        geo.ui.Friends.superclass.initComponents.call(this);
        
        // Add views to this screen
        this.add([
        	// Button
        	new metal.ui.Button({
        		title: 'Push me',
        		color: 'black',
        		width: 200, 
        		height: 150,
        		style: Titanium.UI.iPhone.SystemButtonStyle.DONE,
        		
        		
        		// On click event
        		onclick: function() {
        			// Get dialog if already exists
        			// ** when a metal.ui.OptionDialog is created, it adds itself
        			//    like any other AbstractView or ControlledComponent to 
        			//	  the global controller (metal.control)
        			var dialog = metal.control.get('event_upload_dialog');
					if (!dialog) {
						// Not exists, create new
						dialog = new metal.ui.OptionDialog({
							id: 'event_upload_dialog',
							
							// The buttons we display
			     			options: ['Gallery', 'Camera', 'Cancel'],
			     			
			     			// Offset inside options property
			     			// (it only changes the color of this button)
							cancel: 2,
							
							// Dialog title
							title: 'Upload from',
							
							// Callback function for on click event
							onclick: function(e) {
								// Find which button								
								switch(e.index) {
									case 0: // Gallery
										var photoGallery = metal.media.photoGallery;
										photoGallery.open({
											success: function(e) {
												ilog('Friends', 'photo gallery returned with:', e);
												alert('hurray!');
											},
											
											cancel: function(e) {
												ilog('Friends', 'photo gallery returned with:', e);
											}
										});
										break;
										
									case 1: // Camera
										var camera = metal.media.camera;
										camera.open({
											error: function(e) {
												ilog('Friends', 'camera returned with:', e);
												alert('Sorry, no camera detected');
											}
										});
										break;
										
									case 2: // Cancel
										// do something...
										break;
										
								}
							}
			     		});
		     		}
					
			 		// Display dialog
			 		dialog.open();	
        		}
        	})
        	]
        );
    },
    initEvents: function() {
        dlog('Friends::' + this.get('id'), 'initEvents');
        geo.ui.Friends.superclass.initEvents.call(this);
    }
});
