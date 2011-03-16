Metal - Rock
============
[Metal framework](https://github.com/amirlazarovich/Metal/tree/master/Resources/Metal) was created for an easier, cleaner, object oriented and happier use of Titanium framework.
Fork me and check out the [EXAMPLEs](https://github.com/amirlazarovich/Metal/tree/master/Resources/EXAMPLEs) folder so 
you could start getting your hands dirty with metal.

This is a work in progress and not yet ready for a mass release, so if you have some free time - give us a hand and help
us perfect this framework. 

### Usage ###
This is really easy! and it only requires two small steps :) (well, after of course you download [Titanium](http://developer.appcelerator.com/get_started))

1. Download [Metal](https://github.com/amirlazarovich/Metal/archives/master) 

2. Open The Titanium Developer application and import the project that you have just now downloaded

3. Promised only two steps right? well, step three is just me saying, go ahead and run it! 

### Simple Example ###

	    /**
		 * 
		 * @include metal
		 */
		Ti.include(
			'/Metal/core/metal.js');	
		
		// Create my tab group
		var myTabGroup = new metal.ui.TabGroup({
			// Give my tab group an id - later you can use it
			// with both JSS and metal.control class (see below)
			// [this is optional, but highly recommended]
			id: 'mytabs',
			
			// Add tabs
			items: [
				// First tab window
				new metal.ui.Window({ 
					title: 'Metal',
					backgroundColor: 'white',			
					items: [
						// Nested items inside my window
						new metal.ui.Label({
							text: 'Hello World'
						})
					]
				})
				
				// ... add more tabs here (@see metal.ui.Tab for more capabilities)
			]
		});
		
		// Display my tab group
		myTabGroup.open();


### Important notes ###
1. Metal was not tested on Android! why? simply because the simulator sux and we don't have devices to play with :(
   Although i did try it once and it required me to increase the stack size. How did i do that? simple insert the following
   line into the tiapp.xml file directly under the `<ti:app>` tag:
   `<property name="ti.android.threadstacksize" type="int">65536</property>`
2. I'm sure i had more notes to add...

	