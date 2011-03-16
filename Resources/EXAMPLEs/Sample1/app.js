/**
 * 
 * @include Metal
 */
Ti.include(
	'/Metal/core/metal.js'
);	

// Create my first Metal TabGroup
var main = new metal.ui.TabGroup({
	id: 'mainTab',
	items: [
    
        // First Tab: Simple View with animation sample
		new metal.ui.Window({
			id: 'anim',
			title: 'Animation',
			barColor: '#000',
            backgroundColor: 'white',
			icon: 'Examples/Sample1/Images/KS_nav_ui.png',
			items: [
				new metal.ui.View({
					width: 100,
                    height: 100,
                    backgroundColor: 'black',
                    // Apply animation of this view
					animation: new metal.ui.Animation({
						properties: {
							duration: 1000,
							backgroundColor: 'red',
							top: 10,
							autoreverse: true,
							repeat: 100
						},
						// Set any animation related events
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
        
        // Second Tab: TableView sample
		new metal.ui.Window({
			id: 'table',
			title: 'Table',
			barColor: 'blue',
            backgroundColor: 'white',
			icon: 'Examples/Sample1/Images//KS_nav_ui.png',
			items: [
                // Simple TableView
				new metal.ui.TableView({
					data: [
                        // Set my TableView data
						new metal.ui.TableRow({
							layout: 'horizontal',
							// Here is where you set all the components
                            // related to this object (TableRow)
							initComponents: function() {
								this.add([
									new metal.ui.Label({
										height: 'auto',
										width: 'auto',
										text: 'left'
									}),
                                    
									// Spacer!!
									{type: 'spacer', padding: 5 /* default padding is 0 */ },
									
									new metal.ui.Label({
										height: 'auto',
										width: 'auto',
										text: 'right'
									})
								]);
							}
						})
					]
				})
			]
		}),
        
        // Third Tab: Map sample
		new metal.ui.Window({
			id: 'map',
			title: 'Map',
			barColor: 'blue',
            backgroundColor: 'white',
			icon: 'Examples/Sample1/Images/KS_nav_ui.png',
			items: [
                // My first Metal Map
                new metal.ui.Map({
                    animate: true,
                    region: {
                        latitude:37.33168900, 
                        longitude:-122.03073100, 
                        latitudeDelta:0.1, 
                        longitudeDelta:0.1
                    },
                    regionFit: true,
                    
                    // Apply your custom markers on this map
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
                })
            ]
		}),
        
        // Forth Tab: ImageButton sample
		new metal.ui.Window({
			id: 'text',
			title: 'Text',
			backgroundColor: 'white',
			icon: 'Examples/Sample1/Images/KS_nav_ui.png',
			layout: 'vertical',
			items:[
				new metal.ui.View({
					top: 15, 
					items: [
						new metal.ui.Label({
							text: 'label: ',
							width: 50,
                            left: 5
						}),
						new metal.ui.TextField({
							left: 60
						})
					]
				}),
				
                // My custom ImageButton widget
				new metal.widget.ImageButton({
					image: 'Examples/Sample1/Images/KS_nav_ui.png',
					top: 50,
					label: {
						text: 'Image button',
						color: 'red',
						font: {fontSize: 10}
					},
				
					onclick: function() {
			     		flog('ImageButton - onclick!');
			        }
				})
			]
		}),
        
        // Fifth Tab: Picker sample
		new metal.ui.Window({
			id: 'picker',
			title: 'Picker',
			icon: 'Examples/Sample1/Images/KS_nav_ui.png',
			items:[
                // Metal simple Picker
				new metal.ui.Picker({
					type: Titanium.UI.PICKER_TYPE_DATE_AND_TIME
			})]
		})
	]
});

// Open tab group
main.open();