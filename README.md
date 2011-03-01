Metal - Rock
============
Metal framework was created for an easier, cleaner, object oriented and happier use of Titanium framework.
Please clone me and check out the EXAMPLE folder so you could start getting your hands dirty with metal.

This is a work in progress and not yet ready for a mass release, so if you have some free time - give us a hand and help
us perfect this framework. 

### Usage ###
This is really easy! and it only requires two small steps :) (well, after of course you download Titanium (http://developer.appcelerator.com/get_started))

1. Download Metal (https://github.com/amirlazarovich/Metal/archives/master) and place it in a folder named "Metal"
inside your "Resources" directory

2. Now replace the contents of "app.js" with the following:

    /**
	 * 
	 * @include metal
	 */
	Ti.include(
		'/Metal/core/metal.js');	
	
	var main = new metal.ui.TabGroup({
		id: 'mainTab',
		items: [
			new metal.ui.Window({
				id: 'homescr',
				title: 'Home',
				barColor: '#000',
                backgroundColor: 'white',
				icon: 'KS_nav_ui.png',
				items: [
					new metal.ui.View({
						width: 100,
                        height: 100,
                        backgroundColor: 'black',
						animation: new metal.ui.Animation({
							properties: {
								duration: 1000,
								backgroundColor: 'red',
								top: 10,
								autoreverse: true,
								repeat: 100
							},
							
							initEvents: function() {
								this.on('start', function() {
									flog('animation has started');
								});
								
								this.on('complete', function() {
									flog('animation is over');
								});
							}
						})
					})
				]
			}),
			new metal.ui.Window({
				id: 'fleetscr',
				title: 'Fleet',
				barColor: 'blue',
                backgroundColor: 'white',
				icon: 'KS_nav_ui.png',
				items: [
					new metal.ui.TableView({
						data: [
							new metal.ui.TableRow({
								layout: 'horizontal',
								
								initComponents: function() {
									this.add([
										new metal.ui.Label({
											height: 'auto',
											left: 5, 
											width: 'auto',
											text: 'left'
										}),
										
										{type: 'spacer' /* padding: X (default: 5)*/ },
										
										new metal.ui.Label({
											height: 'auto',
											width: 'auto',
											text: 'right'
										})
									])
								}
							})
						]
					})
				]
			}),
			new metal.ui.Window({
				id: 'mapscr',
				title: 'Map',
				barColor: 'blue',
                backgroundColor: 'white',
				icon: 'KS_nav_ui.png',
				items: [new metal.ui.Map({
					animate: true,
					region: {
						latitude:37.33168900, 
						longitude:-122.03073100, 
           				latitudeDelta:0.1, 
           				longitudeDelta:0.1
       				},
					regionFit: true,
					markers: [
						new metal.ui.Marker({
							latitude:37.33168900,
							longitude:-122.03073100,
							title:"Steve Jobs",
							subtitle:'Cupertino, CA',
							pincolor:Titanium.Map.ANNOTATION_GREEN,
							animate:true
						})
					]
				})]
			}),
			new metal.ui.Window({
				id: 'alertssrc',
				title: 'Alerts',
				className: 'window-different',
				icon: 'KS_nav_ui.png',
				items:[new metal.ui.TableView()]
			}),
			new metal.ui.Window({
				id: 'driversrc',
				title: 'Drivers',
				className: 'window-simple',
				icon: 'KS_nav_ui.png',
				items:[new metal.ui.TableView()]
			})
		]
	});
	main.open();

3. Promised only two steps right? well, step three is just me saying, go ahead and run it! 

### Important notes ###
1. Metal was not tested on Android! why? simply because the simulator sux and we don't have devices to play with :(
2. I'm sure i had more notes to add...

	