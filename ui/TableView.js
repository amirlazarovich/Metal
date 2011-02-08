metal.ns('metal.ui.TableView');

/**
 * 
 * @class TableView
 */
metal.ui.TableView = metal.extend(metal.ui.AbstractMetalView, (function() {
  
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
    
    /**
     * The native view this class wraps
     *
     * @property {Titanium.UI.TableView} view
     */
    view: undefined,
    
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
    search: null,
    
    /**
     * Table header
     * TODO [TableView] When setting both table header and search bar the latter gets cut off
     * 
     * @property {Titanium.UI.View or metal.ui.AbstractMetalView} header
     */
    header: null, 
    
    /**
     * The views associated with this class
     *
     * @property {Titanium.UI.TableViewRow / Titanium.UI.TableViewSection} items
     */
    items: [],
    
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
        
        // Set native component
        this.view = Ti.UI.createTableView(this.properties);
        
        // Set data/serach bar if passed
        this.view.data = parseData(this.data, this.header);
        this.view.search = this.search;
        
        // Call parent constructor
        metal.ui.TableView.superclass.constructor.call(this);
    },
    
    appendRow: function(row, animation) {
      this.view.appendRow(row, animation);
    },
    
    deleteRow: function(row, animation) {
      this.view.deleteRow(row, animation);
    },
    
    insertRowAfter: function(index, row, animation) {
      this.view.insertRowAfter(index, row, animation);
    },
    
    insertRowBefore: function(index, row, animation) {
      this.view.insertRowBefore(index, row, animation);
    },
    
    scrollToIndex: function(index, animation) {
      this.view.scrollToIndex(index, animation);
    },
    
    scrollToTop: function(top, isAnimated) {
      this.view.scrollToTop(top, {animated: isAnimated || false});
    },
    
    selectRow: function(rowIndex) {
      this.view.selectRow(rowIndex);
    },
    
    setData: function(data, animation) {
      this.view.setData(data, animation);
    },
    
    updateRow: function(row, animation) {
      this.view.updateRow(row, animation);
    }
    
    
    
  }
  
})());
