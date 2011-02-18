Metal - Rock
============
Sample code (put this in app.js):
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
				className: 'window-simple',
				icon: 'KS_nav_ui.png',
				items: [
					new metal.ui.View({
						className: 'view-simple',
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
				className: 'window-different',
				icon: 'KS_nav_ui.png',
				items: [new metal.ui.TableView()]
			}),
			new metal.ui.Window({
				id: 'mapscr',
				title: 'Map',
				className: 'window-simple',
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