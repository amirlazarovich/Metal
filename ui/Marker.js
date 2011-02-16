/**
 *
 * @class metal.ui.Marker
 */
metal.ui.Marker = metal.extend(metal.ui.Component, (function() {

    return {
        /**
         * The id of this window
         *
         * @private
         * @property {String} id
         */
        id: 'MetalMarker',

        type: 'MetalMarker',

        /**
         * Holds all this view's properties
         *
         * @property {Object} properties
         */
        properties : {
            title: 'test',
            animate: true
        },

        /**
         * The Titanium view this class wraps
         *
         * @property {Titanium.UI.View} titaniumComponent
         */
        titaniumComponent: undefined,

        map: undefined,

        /**
         * @constructor
         */
        constructor: function(config) {
            metal.overrideClass(this, config);
            metal.debug.info('Map::' + this.id, 'constructor');

            // Set Titanium component
            this.titaniumComponent = Ti.Map.createAnnotation(this.properties);

            // Call parent constructor
            metal.ui.Marker.superclass.constructor.call(this);
        },
        /**
         * Show the marker on the given map
         *
         * @param {metal.ui.Map} map
         */
        show: function(map) {
            this.map = map;
            map.addMarker(this);
        },
        /**
         * Remove marker from the map
         */
        remove: function() {
            if (this.map) {
                map.removeMarker(this);
            }
        },
        /**
         * Titanium properties
         *
         * @property {Object} titaniumProperties
         */
        titaniumProperties: {
            animate: {
                type: 'boolean'
            },
            image: {
                type: 'string'
            },
            latitude: {
            	type: 'float'
            },
            leftButton: {
                type: 'int,string'
            },
            leftView: {
                type: 'object'
            },
            longitude: {
            	type: 'float'
            },
            pincolor: {
                type: 'int'
            },
            rightButton: {
                type: 'int,string'
            },
            rightView: {
                type: 'object'
            },
            subtitle: {
                type: 'string'
            },
            subtitleid: {
                type: 'string'
            },
            title: {
                type: 'string'
            },
            titleid: {
                type: 'string'
            }
        }
    };
})());