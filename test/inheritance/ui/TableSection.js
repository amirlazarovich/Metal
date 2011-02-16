metal.ns('metal.ui.TableSection');

/**
 *
 * @class TableRow
 */
metal.ui.TableSection = metal.extend(metal.ui.AbstractView, {

    id: 'MetalTableSection',

	type: 'MetalTableSection',
	
    properties: {
        
    },

	/**
	 * The Titanium view this class wraps
	 * 
	 * @property {Titanium.UI.TableViewSection} titaniumComponent
	 */
	titaniumComponent: undefined,
	
	
    /**
     * @constructor
     * @param {Object} config
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        metal.debug.info('MetalTableSection::' + this.id, 'constructor');

        // Set Titanium component
        this.titaniumComponent =  { properties: this.properties };

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
                if (items[i].framework == 'metal') {
                    //this.titaniumComponent.add(items[i].getView());
                } else {
                    row = new metal.ui.TableRow(items[i]);
                    //this.titaniumComponent.add(row.getView());
                }
            }
        } else {
            if (items.framework == 'metal') {
                //this.titaniumComponent.add(items.getView());
            } else {
                row = new metal.ui.TableRow(items[i]);
                //this.titaniumComponent.add(row.getView());
            }
        }
    },
    
    /**
     * 
     * @method setHeader
     * @param {Titanium.UI.View or metal.ui.AbstractView or String} header
     */
    setHeader: function(header) {
      if (typeof header == 'string') {
        this.set('headerTitle', header);
      } else {
        this.set('headerView', header);
      }
    },
    
    /**
     * Titanium properties
     *
     * @property {Object} titaniumProperties
     */
    titaniumProperties: {
    	footerTitle: {
    		type: 'string'
    	},/*
    	footerView: {
    		type: 'object'
    	},*/
    	headerTitle: {
    		type: 'string'
    	},/*
    	headerView: {
    		type: 'object'
    	},*/
    	rowCount: {
    		type: 'int',
    		readonly: true
    	}
    }
});
