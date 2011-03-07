Metal - Rock
============
Metal framework was created for an easier, cleaner, object oriented and happier use of Titanium framework.
Please clone me and check out the EXAMPLE folder so you could start getting your hands dirty with metal.

This is a work in progress and not yet ready for a mass release, so if you have some free time - give us a hand and help
us perfect this framework. 

### Usage ###
This is really easy! and it only requires two small steps :) (well, after of course you download [Titanium](http://developer.appcelerator.com/get_started))

1. Download [Metal](https://github.com/amirlazarovich/Metal/archives/master) and place it in a folder named "Metal"
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
					id: 'anim',
					title: 'Animation',
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
					id: 'table',
					title: 'Table',
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
												width: 'auto',
												text: 'left'
											}),
											
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
				new metal.ui.Window({
					id: 'map',
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
					id: 'text',
					title: 'Text',
					className: 'window-different',
					backgroundColor: 'white',
					icon: 'KS_nav_ui.png',
					layout: 'vertical',
					items:[
						new metal.ui.View({
							layout: 'horizontal',
							top: 5, 
							left: 5,
							items: [
								new metal.ui.Label({
									text: 'label: ',
									width: 50
								}),
								new metal.ui.TextField({
									left: 5
								})
							]
						}),
						
						new metal.widget.ImageButton({
							image: 'KS_nav_ui.png',
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
				new metal.ui.Window({
					id: 'picker',
					title: 'Picker',
					className: 'window-simple',
					icon: 'KS_nav_ui.png',
					items:[
						new metal.ui.Picker({
							type: Titanium.UI.PICKER_TYPE_DATE_AND_TIME
					})]
				})
			]
		});
		main.open();

3. Promised only two steps right? well, step three is just me saying, go ahead and run it! 

### Important notes ###
1. Metal was not tested on Android! why? simply because the simulator sux and we don't have devices to play with :(
2. I'm sure i had more notes to add...

	