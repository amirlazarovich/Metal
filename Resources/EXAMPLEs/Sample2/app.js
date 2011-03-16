
Ti.include(

// Metal framework
'/Metal/core/metal.js',

// Geo Manage framework
'/Examples/Sample2/Geo/core/geo.js'

);

// Create a new tab screen window
var tabGroup = new metal.ui.TabGroup({

    // The id of this tab group
    id: 'maintabs',

    // Set the starting tab index
    startingTab: 0, 

    // Easy way to set all tabs
    items: [
    new metal.ui.Tab({
        id: 'tab_events',
        window: new geo.ui.Events(),
        properties: {
            title: 'Events',
            icon: 'Examples/Sample2/Geo/images/tabs/KS_nav_views.png'
        }

    }),
    new metal.ui.Tab({
        id: 'tab_friends',
        window: new geo.ui.Friends(),
        properties: {
            title: 'Friends',
            icon:'Examples/Sample2/Geo/images/tabs/KS_nav_ui.png'
        }
    }),

    new metal.ui.Tab({
        id: 'tab_statistics',
        window: new geo.ui.Statistics(),
        properties: {
            title: 'Statistics',
            icon:'Examples/Sample2/Geo/images/tabs/KS_nav_views.png'
        }
    })
    ]
});


// Open our tab group
metal.control.open(tabGroup); // Passing the id of this view will work as well :)