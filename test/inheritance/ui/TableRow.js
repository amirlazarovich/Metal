metal.ns('metal.ui.TableRow');

/**
 *
 * @class TableRow
 */
metal.ui.TableRow = metal.extend(metal.ui.AbstractView, {

    id: 'MetalTableRow',

	type: 'MetalTableRow',
	 
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
        metal.debug.info('MetalTableRow::' + this.id, 'constructor');

        // Set Titanium component
        this.titaniumComponent = { properties: this.properties };

        // Call parent constructor
        metal.ui.TableRow.superclass.constructor.call(this);
    }
});
