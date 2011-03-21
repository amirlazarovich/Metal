metal.ns('geo.widget.EventList');

/**
 * My custom table widget
 *
 * @class geo.widget.EventList
 */
geo.widget.EventList = metal.extend(metal.ui.TableView, (function() {

	/**
 	* Parse the raw data
 	*/
	function parseData(data) {
		var events = [];
		data = data || [];

		// Go over all received data and wrap each field with
		// a custom table row
		for (var i = 0, iln = data.length; i < iln; i++) {
			events.push(new geo.widgets.EventRow({
				id: data[i].name,
				data: data[i],
				filter: data[i].name
			}));
		}

		return events;
	};

	return {
		/**
 		* @override
 		*/
		properties: {
			id: 'eventlist',
			backgroundColor: '#111',
			separatorColor: 'gray',
			filterAttribute: 'filter',
			height: '88%',
			top: 0
		},

		/**
 		* @override
 		*/
		constructor: function(data) {
			// Set this table's data
			this.data = parseData(data);

			// Call parent
			geo.widget.EventList.superclass.constructor.call(this);
		},
		/**
 		* @override
 		*/
		initComponents: function() {
			// Call parent
			geo.widget.EventList.superclass.initComponents.call(this);
			
			// Set the search bar
			this.set('search', new metal.widget.SearchBar({
				barColor: 'black',
				showCancel: false,
				hintText: 'Search...'
			}));
			
			// Set the table header
			this.set('header', new metal.ui.View({
				className: 'events-header',
				height: 40,
				width: 'auto',
				items: [
					new metal.ui.View({
                        className: 'events-header-wrapper',
					    height: 23,
                        width: metal.width - 20,
                        items: [
							new metal.ui.Label({
								text: 'Total Events:',
                            	className: 'events-label-desc'
							}),
			
							new metal.ui.Label({
								id: 'numOfEvents',
	                            text: this.data.length,
	                            className: 'events-label-val'
							}),
			
							{ type: 'spacer', padding: 20},
			
							new metal.ui.Label({
								text: 'Total Attendings:',
                           		className: 'events-label-desc'
							}),
			
							new metal.ui.Label({
								id: 'numOfAttendings',
	                            text: '-',
	                            className: 'events-label-val'
							})
						]
					})
				]
			}));
			
			
			
		},
		/**
 		* @override
 		*/
		initEvents: function() {
			// Call parent
			geo.widget.EventList.superclass.initEvents.call(this);
			var me = this;
		
			// Search bar events
			me.search.on('change', function(e) {
				//e.value; // search string as user types
			});
			me.search.on('return', function(e) {
				//me.search.blur();
				
			});
			me.search.on('cancel', function(e) {
				//me.search.blur();
			});
		}
	};

})());
