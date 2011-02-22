metal.ns('metal.ui.TableRow');

/**
 *
 * @class TableRow
 */
metal.ui.TableRow = metal.extend(metal.ui.AbstractView, {

    type: 'MetalTableRow',

    properties: {
 		id: 'MetalTableRow'
    },

    /**
     * The Titanium view this class wraps
     *
     * @property {Ti.UI.TableViewRow} titaniumComponent
     */
    titaniumComponent: undefined,

    /**
     * @constructor
     * @param {Object} config
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        metal.debug.info('MetalTableRow::' + this.get('id'), 'constructor');
		
        // Set Titanium component
        this.titaniumComponent = Ti.UI.createTableViewRow(this.properties);

        // Call parent constructor
        metal.ui.TableRow.superclass.constructor.call(this);
    },
    /**
     * Titanium properties
     *
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {
        color: {
            type: 'string'
        },
        hasCheck: {
            type: 'boolean'
        },
        hasChild: {
            type: 'boolean'
        },
        hasDetail: {
            type: 'boolean'
        },
        indentionLevel: {
            type: 'int'
        },
        layout: {
            type: 'string'
        },
        leftImage: {
            type: 'string'
        },
        rightImage: {
            type: 'string'
        },
        selectedBackgroundColor: {
            type: 'string'
        },
        selectedBackgroundImage: {
            type: 'string'
        },
        selectedColor: {
            type: 'string'
        },
        selectionStyle: {
            type: 'int'
        },
        title: {
            type: 'string'
        }
    }
});
