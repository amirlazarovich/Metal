metal.ns('geo.widgets.EventRow');

/**
 * Represents a single row in an Events lists
 *
 * @class EventRow
 */
geo.widgets.EventRow = metal.extend(metal.ui.TableRow, (function() {

    return {
        /**
         * Row data
         *
         * @property {Object} data
         */
        data: undefined,

        /**
         * @property {Object} properties
         */
        properties: {
        	/**
	         * @property {String} id
	         */
	        id: 'eventrow',
            //layout: 'horizontal',
            filter: undefined
        },
		
		/**
		 * @constructor
		 * @param {Object} config
		 */
		constructor: function(config) {
			metal.overrideClass(this, config);
			dlog('EventRow::' + this.get('id'), 'constructor');
			
        	// Call parent constructor
        	geo.widgets.EventRow.superclass.constructor.call(this);
		},
		
		
        /**
         * @override
         * @method initComponents
         */
        initComponents: function() {
        	// Call parent
        	geo.widgets.EventRow.superclass.initComponents.call(this);
			
			// Get this event row data
            var event = this.get('data');
			var me = this;
			
            this.add([
            // Event picture
            new metal.ui.View({
                backgroundImage: event.picture,
                className: 'events-row-img',
                width: 30,
                height: 30
            }),

            // Row text wrapper
            new metal.ui.View({
                className: 'events-row-text',
                //width: 110,
                width: metal.width - 141,
                left: 40,
                height: 'auto',
                items: [
                // First line
                new metal.ui.View({
                    className: 'hbox',
                    height: 'auto',
                    width: 'auto',
                    left: 6,
                    items: [
                    new metal.ui.Label({
                        className: 'header-yellow',
                        width: event.name.length * 8,
                        text: event.name + ', '
                    }),

                    new metal.ui.Label({
                        className: 'text-yellow',
                        text: event.get('city')
                    })
                    ]
                }),
                // Second line
                new metal.ui.Label({
                    className: 'text-white',
                    left: 6,
                    text: event.owner.name + ', ' + event.startDate
                })
                ]
            }),

            // Spacer!
            //{type: 'spacer'},

            // Right images
            new metal.ui.View({
                id: 'pin',
                className: 'events-row-pin',
            	width: 32,
				height: 32,	
                right: 69,
                backgroundImage: 'Examples/Sample2/Geo/images/events/pin.png',
                initEvents: function() {
                    this.on('click', function(e) {
                        me.fire('pinClick', e);
                    });
                }
            }),

            new metal.ui.View({
                id: 'x',
                className: 'events-row-x',
                width: 32,
				height: 32,	
                right: 37,
                backgroundImage: 'Examples/Sample2/Geo/images/events/x.png',
                initEvents: function() {
                    this.on('click', function(e) {
                        me.fire('xClick', e);
                    });
                }
            }),

            new metal.ui.View({
                id: 'v',
                className: 'events-row-v',
                width: 32,
				height: 32,	
                right: 5,
                backgroundImage: 'Examples/Sample2/Geo/images/events/v.png',

                initEvents: function() {
                    this.on('click', function(e) {
                        me.fire('vClick', e);
                    });
                }
            })
            ]);
        },
        
        /**
         * @override initEvents
         */
        initEvents: function() {
        	// Call parent
        	geo.widgets.EventRow.superclass.initEvents.call(this);
        	
        	var me = this;
        	me.on('click', function(e) {
        		var id = e.source.id;
        		if (id == me.get('id')) {
        			// User clicked on the row (not on any of the right images)
        			metal.control.openChild(new geo.ui.Event({
	        			id: me.get('id'),
	        			data: me.get('data')
	        		}));	
        		}
        	});
        	
        	me.on('pinClick', function(e) {
        		// Create the event map object
                var map = new geo.ui.EventMap(me.get('data'));

                // Show the event on the map
				metal.control.openChild(map);
        	});
        	
        	me.on('xClick', function(e) {
        		// Remove this row from the events list
                metal.control.get('eventlist').deleteRow(me);
                
                wlog('EventRow::X-onClick', 'remove this row from the DB');
                // TODO [EventRow::X-onClick] remove this row from the DB
                // If user is subscribed, remove him
        	});
        	
        	me.on('vClick', function(e) {
        		// Highlight row
                me.set('backgroundColor', '#F03C3C');
                
                wlog('EventRow::V-onClick', 'subscribe this user to the selected event');
                // TODO [EventRow::V-onClick] subscribe this user to the selected event	
        	});
        }

    };

})());
