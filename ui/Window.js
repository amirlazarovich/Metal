metal.ns('metal.ui.Window');

/**
 *
 * @class window
 */
metal.ui.Window = metal.extend(metal.ui.AbstractView, {

    /**
     * The id of this window
     *
     * @private
     * @property {String} id
     */
    id: 'MetalWindow',

    type: 'MetalWindow',

    /**
     * Holds all this view's properties
     *
     * @property {Object} properties
     */
    properties : {
        title: 'window',
        fullscreen: true
    },

    /**
     * The Titanium window this class wraps
     *
     * @property {Titanium.UI.Window} titaniumComponent
     */
    titaniumComponent: undefined,

    /**
     * @constructor
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        metal.debug.info('Window::' + this.id, 'constructor');

        // Set Titanium component
        this.titaniumComponent = Ti.UI.createWindow(this.properties);

        // Call parent constructor
        metal.ui.Window.superclass.constructor.call(this);
    },
    
    /**
     * Titanium properties
     * 
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {
        backButtonTitle: {
            type: 'string'
        },
        backButtonTitleImage: {
            type: 'string'
        },
        barColor: {
            type: 'string'
        },
        barImage: {
            type: 'string'
        },
        exitOnClose: {
            type: 'boolean'
        },
        fullscreen: {
            type: 'boolean'
        },
        leftNavButton: {
            type: 'object'
        },
        modal: {
            type: 'boolean'
        },
        navBarHidden: {
            type: 'boolean'
        },
        orientationModes: {
            type: 'arra'
        },
        rightNavButton: {
            type: 'object'
        },
        softInputMode: {
            type: 'int'
        },
        tabBarHidden: {
            type: 'boolean'
        },
        title: {
            type: 'string'
        },
        titleControl: {
            type: 'object'
        },
        titleImage: {
            type: 'string'
        },
        titlePrompt: {
            type: 'string'
        },
        titleid: {
            type: 'string'
        },
        titlepromptid: {
            type: 'string'
        },
        toolbar: {
            type: 'array'
        },
        translucent: {
            type: 'boolean'
        },
        url: {
            type: 'string'
        }
    }
});

