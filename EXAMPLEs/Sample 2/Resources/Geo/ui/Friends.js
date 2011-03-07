metal.ns('geo.ui.Friends');

/**
 *
 * @class Friends
 */
geo.ui.Friends = metal.extend(metal.ui.Window, {

    id: 'friends',

    properties: {
        title: 'Friends',
        backgroundColor: 'white',
        barColor: 'black',
        fullscreen: true
    },

    constructor: function(config) {
        metal.overrideClass(this, config);
        dlog('Friends::' + this.get('id'), 'constructor');

        // Call parent constructor
        geo.ui.Friends.superclass.constructor.call(this);
    },
    initComponents: function() {
        dlog('Friends::' + this.get('id'), 'initComponents');
        geo.ui.Friends.superclass.initComponents.call(this);
        
        
    },
    initEvents: function() {
        dlog('Friends::' + this.get('id'), 'initEvents');
        geo.ui.Friends.superclass.initEvents.call(this);
    }
});
