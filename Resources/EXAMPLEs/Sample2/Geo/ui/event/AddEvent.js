metal.ns('geo.ui.AddEvent');

/**
 * @class geo.ui.AddEvent
 */
geo.ui.AddEvent = metal.extend(metal.ui.Window, (function() {
	
	return {
		
		/**
		 * @override
		 */
		properties: {
			id: 'addevent',
			title: 'Create new event',
			backgroundColor: '#111',
			barColor: 'black',
			fullscreen: true,
			layout: 'vertical'
		},
		
		/**
		 * @constructor
		 * @param {Object} config
		 */
		constructor: function(config) {
	        metal.overrideClass(this, config);
	        dlog('Add Event::' + this.get('id'), 'constructor');
			
	        // Call parent constructor
	        geo.ui.AddEvent.superclass.constructor.call(this);
	    },
	    
	    /**
	     * @override 
	     */
	    initComponents: function() {
	        dlog('Add Event::' + this.get('id'), 'initComponents');
	        // Call parent
	        geo.ui.AddEvent.superclass.initComponents.call(this);
	        
	        // Set top bar button
	        this.set('rightNavButton', new metal.ui.Button({
	        	title: 'save'
	        }));
	        
	        // Add views
	        this.add([
		       
		
		        // Label
		        new metal.ui.TextField({
		        	top: 10,
					height: 22,
					width: metal.width - 20,
					hintText: 'Type Event Title...',
					font: {fontSize: 12},
					borderStyle: metal.ui.INPUT_BORDERSTYLE_ROUNDED
				}),
		        /*
		        new metal.ui.TextArea({
		        	top: 10,
					height: 50,
					width: metal.width - 20,
					hintText: 'Type Event Description...',
					font: {fontSize: 12},
					borderWidth:2,
					borderColor:'#bbb',
					borderRadius:5
				})
				*/
				
				new metal.ui.TextField({
		        	top: 10,
					height: 50,
					width: metal.width - 20,
					hintText: 'Type Event Description...',
					font: {fontSize: 12},
					borderStyle: metal.ui.INPUT_BORDERSTYLE_ROUNDED
				}),
				
				// Date & Event type pickers
				new metal.widget.ImageButton({

					properties: {
						layout: 'horizontal',
						backgroundColor: 'white',
						top: 10,
						width: metal.width - 20,
						borderRadius: 5
					},
					
					highlight: {
						active: true,
						color: '#0055ee'
					},
					
					image: './Geo/images/events/globus.png',
					renderImageFirst: false,
					
					label: {
						text: 'Select Date & Event type',
						height: 22,
						font: {fontSize: 12}
					},
				
					onclick: function() {
			     		metal.control.openChild(new geo.ui.EventDateAndTimeSelection());
			     		/*
			     		if (metal.control.get('eventDateAndTimeSelection')) {
			     			metal.control.openChild('eventDateAndTimeSelection');
			     		} else {
			     			metal.control.openChild(new geo.ui.EventDateAndTimeSelection());
			     		}
			     		*/
			        }
				})
	        ]);
	    },
	    
	    /**
	     * @override
	     */
	    initEvents: function() {
	        dlog('Add Event::' + this.get('id'), 'initEvents');
	        // Call parent
	        geo.ui.AddEvent.superclass.initEvents.call(this);
	    }
		
	};
	
})());
