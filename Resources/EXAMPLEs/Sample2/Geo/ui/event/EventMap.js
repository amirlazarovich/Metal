metal.ns('geo.ui.EventMap');

/**
 * 
 * @class geo.ui.EventMap
 */
geo.ui.EventMap = metal.extend(metal.ui.Window, (function() {
	
	
	return {
		/**
		 * @property {String} id
		 */
		id: 'eventmap',
		
		/**
		 * The event data
		 * 
		 * @property {Object} data
		 */
		data: undefined,
		
		/**
		 * @property {Object} properties
		 */
		properties: {
			title: 'Locate Event',
			barColor: 'black'
		},
		
		/**
		 * @constructor
		 */
		constructor: function(data) {
			this.data = data;
			
			// Call parent
			geo.ui.EventMap.superclass.constructor.call(this);
		},
		
		/**
		 * @override
		 */
		initComponents: function() {
			var map = new metal.ui.Map({
				animate: true,
					region: {
						latitude: this.data.get('lat'), 
						longitude: this.data.get('lng'), 
           				latitudeDelta:0.1, 
           				longitudeDelta:0.1
       				},
					regionFit: true,
					markers: [
						new metal.ui.Marker({
							latitude: this.data.get('lat'),
							longitude: this.data.get('lng'),
							title: this.data.get('name'),
							subtitle: this.data.get('owner').name,
							pincolor: Titanium.Map.ANNOTATION_GREEN,
							animate: true
						})
					]
			});
			
			// Add the map to this window
			this.add(map);
			
			// Call parent
			geo.ui.EventMap.superclass.initComponents.call(this);
		}	
	};
	
})());
