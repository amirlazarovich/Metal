
Ti.include(

// Metal framework
'/Metal/core/metal.js',

// Geo Manage framework
'/Geo/core/geo.js'

);

// Create a new tab screen window
var tabGroup = new metal.ui.TabGroup({

    // The id of this tab group
    id: 'maintabs',

    // Set the starting tab index
    startingTab: 0, // TODO [app] get true starting tab

    // Easy way to set all tabs
    items: [
    new metal.ui.Tab({
        id: 'tab_events',
        window: new geo.ui.Events(),
        properties: {
            title: L('Events'),
            icon: 'Geo/images/tabs/events.png'
        }

    }),
    new metal.ui.Tab({
        id: 'tab_friends',
        window: new geo.ui.Friends(),
        properties: {
            title: L('Friends'),
            icon:'Geo/images/tabs/friends.png'
        }
    }),

    new metal.ui.Tab({
        id: 'tab_statistics',
        window: new geo.ui.Statistics(),
        properties: {
            title: L('Statistics'),
            icon:'Geo/images/tabs/statistics.png'
        }
    })
    ]
});


// Open our tab group
metal.control.open(tabGroup); // Passing the id of this view will work as well :)