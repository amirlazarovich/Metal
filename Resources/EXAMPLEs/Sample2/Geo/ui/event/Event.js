metal.ns('geo.ui.Event');

/**
 * @class geo.ui.Event
 */
geo.ui.Event = metal.extend(metal.ui.Window, (function() {
	
	return {
		
		/**
		 * This event data
		 * 
		 * @property {Object} data
		 */
		data: undefined,
		
		/**
		 * @override
		 */
		properties: {
			id: 'event',
			backgroundColor: 'white',
			barColor: 'black'
		},
		
		/**
		 * @constructor
		 * @param {Object} config
		 */
		constructor: function(config) {
	        metal.overrideClass(this, config);
	        dlog('Event::' + this.get('id'), 'constructor');
			
	        // Call parent constructor
	        geo.ui.Event.superclass.constructor.call(this);
	        
	        // Set title
			this.set('title', this.get('id'));
	    },
	    
	    /**
	     * @override 
	     */
	    initComponents: function() {
	        dlog('Event::' + this.get('id'), 'initComponents');
	        geo.ui.Event.superclass.initComponents.call(this);
	        
	        
	    },
	    
	    /**
	     * @override
	     */
	    initEvents: function() {
	        dlog('Event::' + this.get('id'), 'initEvents');
	        geo.ui.Event.superclass.initEvents.call(this);
	    }
		
	};
	
})());
