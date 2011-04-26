Metal - Rock
============
[Metal framework](https://github.com/amirlazarovich/Metal/tree/master/Resources/Metal) was created for an easier, cleaner, object oriented and happier use of Titanium framework.
Fork me and check out the [EXAMPLEs](https://github.com/amirlazarovich/Metal/tree/master/Resources/EXAMPLEs) folder so 
you could start getting your hands dirty with metal.

This is a work in progress and not yet ready for a mass release, so if you have some free time - give me a hand and help
me perfect this framework. 

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


### Important notes for Android users ###
- In order for Metal to work with Android you need to insert the following line into the tiapp.xml file directly 
  under the `<ti:app>` tag:
		<property name="ti.android.threadstacksize" type="int">65536</property>
- This is just a reminder, but if you plan on using Google Maps you also need to include your Google Maps keys for dev/production under the `<ti:app>` tag:
		<property name="ti.android.google.map.api.key.development">ENTER YOUR DEVELOPMENT KEY HERE</property>
		<property name="ti.android.google.map.api.key.production">ENTER YOUR PRODUCTION KEY HERE</property>
  [Click here to generate your own Android Google Maps keys](http://code.google.com/android/maps-api-signup.html)