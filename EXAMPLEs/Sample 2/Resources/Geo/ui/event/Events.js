metal.ns('geo.ui.Events');

/**
 * My custom window
 *
 * @class geo.ui.MyList
 */
geo.ui.Events = metal.extend(metal.ui.Window, {

	/**
 	* @override
 	*/
	properties: {
		id: 'mylist',
		title: 'Events',
		barColor: 'black',
		backgroundColor: 'black',
		fullscreen: true
	},

	/**
 	* @override
 	*/
	initComponents: function() {
		// Call parent
		geo.ui.Events.superclass.initComponents.call(this);
		
		// Mockup data
		var data = geo.test.get('events');

		// Add list to this window
		this.add(new geo.widget.EventList(data));
		
		// Add footer
		this.add(
			new metal.ui.View({
				className: 'hbox',
				bottom: 0,
				height: 'auto',
				items: [
					new metal.widget.ImageButton({
						image: './Geo/images/events/add.png',
						label: {
							text: 'Create new event',
							color: 'white',
							font: {fontSize: 10}
						},
					
						onclick: function() {
				     		if (metal.control.get('addevent')) {
				     			metal.control.openChild('addevent');
				     		} else {
				     			metal.control.openChild(new geo.ui.AddEvent());
				     		}
				        }
					}),
					
					{type: 'spacer', padding: 10},
					
					new metal.widget.ImageButton({
						image: './Geo/images/events/globus.png',
						
						label: {
							text: 'Events around you',
							color: 'white',
							font: {fontSize: 10}
						},
					
						onclick: function() {
							ilog('Events::Globus', ' - onclick');
				     		/*
				     		if (metal.control.get('locateevents')) {
				     			metal.control.openChild('locateevents');
				     		} else {
				     			metal.control.openChild(new geo.ui.LocateEvents());
				     		}
				     		*/
				        }
					})
					
				]
			})
			
		);
	}
});
