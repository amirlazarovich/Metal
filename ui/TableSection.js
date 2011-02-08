metal.ns('metal.ui.TableSection');

/**
 *
 * @class TableRow
 */
metal.ui.TableSection = metal.extend(metal.ui.AbstractMetalView, {

    id: 'MetalTableSection',

    properties: {
        
    },

    /**
     * @constructor
     * @param {Object} config
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        metal.debug.info('MetalTableSection::' + this.id, 'constructor');

        // Set native component
        this.view = Ti.UI.createTableViewSection(this.properties);

        // Call parent constructor
        metal.ui.TableSection.superclass.constructor.call(this);
    },
    
    
    /**
     *
     * @method add
     * @param {[Array of] Object or metal.ui.TableRow} items
     */
    add: function(items) {
        var row;
        if (metal.isArray(items)) {
            for (var i in items) {
                if (items[i].type == 'metal') {
                    this.view.add(items[i].getView());
                } else {
                    row = new metal.ui.TableRow(items[i]);
                    this.view.add(row.getView());
                }
            }
        } else {
            if (items.type == 'metal') {
                this.view.add(items.getView());
            } else {
                row = new metal.ui.TableRow(items[i]);
                this.view.add(row.getView());
            }
        }
    },
    
    /**
     * 
     * @method setHeader
     * @param {Titanium.UI.View or metal.ui.AbstractMetalView or String} header
     */
    setHeader: function(header) {
      if (typeof header == 'string') {
        this.set('headerTitle', header);
      } else {
        this.set('headerView', header);
      }
    }
});
