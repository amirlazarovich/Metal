metal.ns('simple.ui.Event');

/**
 * @class simple.ui.Event
 */
simple.ui.Event = metal.extend(metal.ui.Window, (function() {
	
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
	        simple.ui.Event.superclass.constructor.call(this);
	    },
	    
	    /**
	     * @override 
	     */
	    initComponents: function() {
	        dlog('Event::' + this.get('id'), 'initComponents');
	        simple.ui.Event.superclass.initComponents.call(this);
	        
	        // Set title
			this.set('title', this.get('id'));
	    },
	    
	    /**
	     * @override
	     */
	    initEvents: function() {
	        dlog('Event::' + this.get('id'), 'initEvents');
	        simple.ui.Event.superclass.initEvents.call(this);
	    }
		
	};
	
})());
