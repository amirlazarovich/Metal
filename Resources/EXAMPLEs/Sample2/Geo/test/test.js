metal.ns('geo.test');

/**
 *
 * @class test.net
 */
geo.test = (function() {

    return {
        tests: {
            events: function() {
                var data = [];
                // Mockup data sent from the server
                for (var i = 0; i < 10; i++) {
                  data.push(new geo.model.Event({
                  	owner: new geo.model.User({
                  		name: 'Owner ' + i 
                  	}),
                  	name: 'Event ' + i,
                  	startDate: '12.01.11',
                  	endDate: '17.01.11',
                  	picture: 'Examples/Sample2/Geo/images/events/me.jpg',
                  	location: new metal.model.GeoLocation({
                  		lat: 32.123 + i, 
                  		lng: 12.312 - i, 
                  		address: {
                  			city: 'Tel-aviv'
                  		}
              		}),
                  	items: [
                  		new geo.model.User({
                  			name: 'bob ' + i
                  		})
                  	]
                  }));
                }
                
                return data;
            },
            
            eventtype: function() {
            	var types = [];
            	for (var i = 0; i < 10; i++) {
            		types.push(new metal.ui.PickerRow({
            			text: 'row ' + i
            		}));
            	}
            	
            	return types;
            }
        },

        get: function(name) {
            var test = this.tests[name];
            if (typeof test == 'function') {
                return test();
            } else {
                return test;
            }
        }
    };
})();

