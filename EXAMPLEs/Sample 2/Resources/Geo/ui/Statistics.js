metal.ns('geo.ui.Statistics');

/**
 *
 * @class Statistics
 */
geo.ui.Statistics = metal.extend(metal.ui.Window, {

    id: 'statistics',

    properties: {
        title: 'Statistics',
        backgroundColor: 'white',
        barColor: 'black',
        fullscreen: true
    },

    constructor: function(config) {
        metal.overrideClass(this, config);
        dlog('Statistics::' + this.get('id'), 'constructor');

        // Call parent constructor
        geo.ui.Statistics.superclass.constructor.call(this);
    },
    initComponents: function() {
        dlog('Statistics::' + this.get('id'), 'initComponents');
		geo.ui.Statistics.superclass.initComponents.call(this);
    },
    initEvents: function() {
        dlog('Statistics::' + this.get('id'), 'initEvents');
        geo.ui.Statistics.superclass.initEvents.call(this);
    }
});
