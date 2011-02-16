/*
var abst = new metal.ui.AbstractView();
var win = new metal.ui.Window({
	width: 100,
	height: 100
});
var mine = new metal.ui.MyWindow({ 
	properties: {
		title: 'OVERRIDE',
		something: true
	}
});

*/

/*
var win = new metal.ui.Window({
		id: 'mapscr',
		title: 'Map',
		items: [new metal.ui.Map({
			id: 'my marker',
			markers: [
				new metal.ui.Marker({
					latitude:37.33168900,
					longitude:-122.03073100,
					title:"Steve Jobs",
					subtitle:'Cupertino, CA',
					pincolor:'green',
					animate:true
				})
			]
		})]
	});
	*/
	
var main = new metal.ui.TabGroup({
		id: 'mainTab',
		items: [
			new metal.ui.Window({
				id: 'homescr',
				title: 'Home',
				barColor: '#000',
				backgroundColor: '#fff',
				icon: 'KS_nav_ui.png',
				items: [
					new metal.ui.View({
						properties: {
							width: 100,
							height: 100,
							backgroundColor: 'black'
						},
						
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
				barColor: '#000',
				title: 'Fleet',
				icon: 'KS_nav_ui.png',
				items: [new metal.ui.TableView()]
			}),
			new metal.ui.Window({
				id: 'mapscr',
				title: 'Map',
				icon: 'KS_nav_ui.png',
				items: [new metal.ui.Map({
					markers: [
						new metal.ui.Marker({
							latitude:37.33168900,
							longitude:-122.03073100,
							title:"Steve Jobs",
							subtitle:'Cupertino, CA',
							pincolor:'green',
							animate:true
						})
					]
				})]
			}),
			new metal.ui.Window({
				id: 'alertssrc',
				title: 'Alerts',
				icon: 'images/img-alerts.png',
				items:[new metal.ui.TableView()]
			}),
			new metal.ui.Window({
				id: 'driversrc',
				title: 'Drivers',
				icon: 'KS_nav_ui.png',
				items:[new metal.ui.TableView()]
			})
		]
	});
	