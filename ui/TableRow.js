metal.ns('metal.ui.TableRow');

/**
 *
 * @class TableRow
 */
metal.ui.TableRow = metal.extend(metal.ui.AbstractMetalView, {

    id: 'MetalTableRow',

    properties: {
        /*
        hasCheck: false,
        hasChild: false,
        hasDetail: false,
        indentionLevel: 0,
        leftImage: '',
        rightImage: '',
        selectedBackgroundColor: '#8696FD'
        */
    },

    /**
     * @constructor
     * @param {Object} config
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        metal.debug.info('MetalTableRow::' + this.id, 'constructor');

        // Set native component
        this.view = Ti.UI.createTableViewRow(this.properties);

        // Call parent constructor
        metal.ui.TableRow.superclass.constructor.call(this);
    }
});
