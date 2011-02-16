metal.ns('metal.ui.TableView');

/**
 * 
 * @class TableView
 */
metal.ui.TableView = metal.extend(metal.ui.AbstractView, (function() {
  
  function parseData(data, header) {
      var store = [];
      
      // TODO [TableView] Need to support more than one section
      var section = new metal.ui.TableSection();
      
      if (typeof header != 'undefined') {
        section.setHeader(header);
      }
      section.add(data);
      store.push(section.getView());
      
      return store;
  }
  
  
  return {
    
    id: 'MetalTableView',
    
    type: 'MetalTableView',
    
    /**
     * The Titanium view this class wraps
     *
     * @property {Titanium.UI.TableView} titaniumComponent
     */
    titaniumComponent: undefined,
    
    /**
     * The data store associated with this table view
     * 
     * @property {Array} data
     */
    data: [],
    
    /**
     * The search bar associated with the table view
     * 
     * @property {Titanium.UI.createSearchBar} search
     */
    search: undefined,
    
    /**
     * Table header
     * TODO [TableView] When setting both table header and search bar the latter gets cut off
     * 
     * @property {Titanium.UI.View or metal.ui.AbstractView} header
     */
    header: undefined, 
    
    /**
     * Table footer
     * 
     * @property {Titanium.UI.View or metal.ui.AbstractView} footer
     */
    footer: undefined,
    
    /**
     * The views associated with this class
     *
     * @property {Titanium.UI.TableViewRow or Titanium.UI.TableViewSection} items
     */
    items: [],
    
    /**
     * The table view properties
     * 
     * @property {Object} properties
     */
    properties: {
      searchHidden: true
    },
    
   /**
     * @constructor
     * @param {Object} config
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        metal.debug.info('MetalTableView::' + this.id, 'constructor');
        
        // Set Titanium component
        this.titaniumComponent = {};
        
        // Set data/serach bar if passed
        this.titaniumComponent.data = parseData(this.data, this.header);
        this.titaniumComponent.search = this.search;
        if (!metal.isNothing(this.footer)) { 
        	this.titaniumComponent.footerView = metal.getView(this.footer); 
    	}
        
        // Call parent constructor
        metal.ui.TableView.superclass.constructor.call(this);
    },
    
    appendRow: function(row, animation) {
      this.titaniumComponent.appendRow(row, animation);
    },
    
    deleteRow: function(row, animation) {
      this.titaniumComponent.deleteRow(row, animation);
    },
    
    insertRowAfter: function(index, row, animation) {
      this.titaniumComponent.insertRowAfter(index, row, animation);
    },
    
    insertRowBefore: function(index, row, animation) {
      this.titaniumComponent.insertRowBefore(index, row, animation);
    },
    
    scrollToIndex: function(index, animation) {
      this.titaniumComponent.scrollToIndex(index, animation);
    },
    
    scrollToTop: function(top, isAnimated) {
      this.titaniumComponent.scrollToTop(top, {animated: isAnimated || false});
    },
    
    selectRow: function(rowIndex) {
      this.titaniumComponent.selectRow(rowIndex);
    },
    
    deselectRow: function(rowIndex) {
    	this.titaniumComponent.deselectRow(rowIndex);
    },
    
    setData: function(data, animation) {
      this.titaniumComponent.setData(data, animation);
    },
    
    updateRow: function(row, animation) {
      this.titaniumComponent.updateRow(row, animation);
    }
  };
})());
