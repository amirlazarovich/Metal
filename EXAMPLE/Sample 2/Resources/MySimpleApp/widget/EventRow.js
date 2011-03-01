metal.ns('simple.widgets.EventRow');

/**
 * Represents a single row in an Events lists
 *
 * @class EventRow
 */
simple.widgets.EventRow = metal.extend(metal.ui.TableRow, (function() {

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
	        id: 'EventRow',
            layout: 'horizontal'
        },
		
		/**
		 * @constructor
		 * @param {Object} config
		 */
		constructor: function(config) {
			metal.overrideClass(this, config);
			dlog('EventRow::' + this.get('id'), 'constructor');
			
        	// Call parent constructor
        	simple.widgets.EventRow.superclass.constructor.call(this);
		},
		
        /**
         * @override
         * @method initComponents
         */
        initComponents: function() {
        	// Call parent
        	simple.widgets.EventRow.superclass.initComponents.call(this);
			
			// Get this event row data
            var data = this.get('data');
			var me = this;
			
            this.add([
            // Event picture
            new metal.ui.View({
                backgroundImage: data.picture,
                className: 'events-row-img'
            }),

            // Row text wrapper
            new metal.ui.View({
                className: 'events-row-text',
                items: [
                // First line
                new metal.ui.View({
                    className: 'hbox',
                    items: [
                    new metal.ui.Label({
                        className: 'header-yellow',
                        width: data.name.length * 8,
                        text: data.name + ', '
                    }),

                    new metal.ui.Label({
                        className: 'text-yellow',
                        text: data.get('city')
                    })
                    ]
                }),
                // Second line
                new metal.ui.Label({
                    className: 'text-white',
                    left: 6,
                    text: data.owner.name + ', ' + data.startDate
                })
                ]
            }),

            // Spacer!
            {type: 'spacer'},

            // Right images
            new metal.ui.View({
                id: 'pin',
                className: 'events-row-pin',
                backgroundImage: './MySimpleApp/images/pin.png',
                initEvents: function() {
                    this.on('click', function(e) {
                        me.fire('pinClick', e);
                    });
                }
            }),

            new metal.ui.View({
                id: 'x',
                className: 'events-row-x',
                backgroundImage: './MySimpleApp/images/x.png',
                initEvents: function() {
                    this.on('click', function(e) {
                        me.fire('xClick', e);
                    });
                }
            }),

            new metal.ui.View({
                id: 'v',
                className: 'events-row-v',
                backgroundImage: './MySimpleApp/images/v.png',

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
        	simple.widgets.EventRow.superclass.initEvents.call(this);
        	
        	var me = this;
        	me.on('click', function(e) {
        		var id = e.source.id;
        		if (id == me.get('id')) {
        			// User clicked on the row (not on any of the right images)
        			metal.control.openChild(new simple.ui.Event({
	        			id: me.get('id'),
	        			data: me.get('data')
	        		}));	
        		}
        	});
        	
        	me.on('pinClick', function(e) {
        		// Create the event map object
                var map = new simple.ui.EventMap(me.get('data'));

                // Show the event on the map
				metal.control.openChild(map);
        	});
        	
        	me.on('xClick', function(e) {
        		// Remove this row from the events list
                metal.control.get('EventTable').deleteRow(me);
                // Add some logic here..
        	});
        	
        	me.on('vClick', function(e) {
        		// Highlight row
                me.set('backgroundColor', '#F03C3C');
				// Add some logic here..
        	});
        },
        
        /**
         * Titanium properties
         *
         * @property {Object} titaniumProperties
         */
        titaniumProperties: {
            filter: {
                type: 'string'
            }
        }

    };

})());
