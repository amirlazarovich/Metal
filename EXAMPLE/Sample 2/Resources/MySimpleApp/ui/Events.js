metal.ns('simple.ui.Events');

/**
 * My custom window
 *
 * @class simple.ui.MyList
 */
simple.ui.Events = metal.extend(metal.ui.Window, {

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
		var data = [];
		// Mockup data for our table
		for (var i = 0; i < 10; i++) {
			data.push(new simple.model.Event({
				owner: new simple.model.User({
					name: 'Owner ' + i
				}),
				name: 'Event ' + i,
				startDate: '28.02.11',
				endDate: '03.03.11',
				picture: './MySimpleApp/images/me.jpg',
				location: new metal.model.GeoLocation({
					lat: 32.123 + i,
					lng: 12.312 - i,
					address: {
						city: 'Tel-aviv'
					}
				}),
				items: [
				new simple.model.User({
					name: 'bob ' + i
				})
				]
			}));
		}

		// Add MyTable to this window
		this.add(new simple.widget.EventTable(data));
	}
});
