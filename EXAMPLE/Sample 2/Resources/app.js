Ti.include(

// Metal framework
'/Metal/core/metal.js',

// My simple application (replace this one with yours..)
'/MySimpleApp/core/simple.js'

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
        window: new simple.ui.Events(),
        properties: {
            title: 'Events',
            icon: './MySimpleApp/images/KS_nav_ui.png'
        }

    }),
    new metal.ui.Tab({
        id: 'tab_friends',
        window: new simple.ui.SimpleWindow({title: 'Friends'}),
        properties: {
            title: 'Friends',
            icon:'./MySimpleApp/images/KS_nav_views.png'
        }
    }),

    new metal.ui.Tab({
        id: 'tab_statistics',
        window: new simple.ui.SimpleWindow({title: 'Statistics'}),
        properties: {
            title: 'Statistics',
            icon:'./MySimpleApp/images/KS_nav_views.png'
        }
    })
    ]
});


// Open our tab group
metal.control.open(tabGroup); // Passing the id of this view will work as well :)