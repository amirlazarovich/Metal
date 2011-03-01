metal.ns('simple.widget.EventTable');

/**
 * My custom table widget
 *
 * @class simple.widget.EventTable
 */
simple.widget.EventTable = metal.extend(metal.ui.TableView, (function() {

	/**
 	* Parse the raw data
 	*/
	function parseData(data) {
		var events = [];
		data = data || [];

		// Go over all received data and wrap each field with
		// a custom table row
		for (var i = 0, iln = data.length; i < iln; i++) {
			events.push(new simple.widgets.EventRow({
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
			id: 'EventTable',
			backgroundColor: '#111',
			separatorColor: 'gray',
			filterAttribute: 'filter'
		},

		/**
 		* @override
 		*/
		constructor: function(data) {
			// Set this table's data
			this.data = parseData(data);

			// Call parent
			simple.widget.EventTable.superclass.constructor.call(this);
		},
		/**
 		* @override
 		*/
		initComponents: function() {
			// Call parent
			simple.widget.EventTable.superclass.initComponents.call(this);
			
			// Set the search bar
			this.set('search', new metal.widget.Search({
				barColor: 'black',
				showCancel: false,
				hintText: 'Search...'
			}));
			
			// Set the table header
			this.set('header', new metal.ui.View({
				className: 'events-header',
				items: [
					new metal.ui.View({
                        className: 'events-header-wrapper',
                        items: [
							new metal.ui.Label({
								text: 'Total Events:',
                            	className: 'events-label-desc',
                            	left: 20
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
			simple.widget.EventTable.superclass.initEvents.call(this);
			var me = this;
		
			// Search bar events
			me.search.on('change', function(e) {
				//e.value; // search string as user types
			});
			me.search.on('return', function(e) {
				me.search.blur();
			});
			me.search.on('cancel', function(e) {
				me.search.blur();
			});
		}
	};

})());
