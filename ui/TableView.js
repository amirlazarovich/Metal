metal.ns('metal.ui.TableView');

/**
 *
 * @class metal.ui.TableView
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.TableView = metal.extend(metal.ui.AbstractView, (function() {

    function parseData(data, header) {
        var store = [];

        // TODO [TableView] Need to support more than one section
        var section = new metal.ui.TableSection();

        if (typeof header != 'undefined') {
            section.setHeader(header);
        }
        
        if (data.length > 0) {
        	section.add(data);
        	store.push(section.getView());
        }

        return store;
    }

    return {

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
        	id: 'MetalTableView',
            searchHidden: true
        },

        /**
         * @constructor
         * @param {Object} config
         */
        constructor: function(config) {
            metal.overrideClass(this, config);
            dlog('MetalTableView::' + this.get('id'), 'constructor');

            // Set Titanium component
            this.titaniumComponent = Ti.UI.createTableView(this.properties);

            // Set data/serach bar if passed
            this.titaniumComponent.data = parseData(this.data, this.header);
            this.titaniumComponent.search = this.search;
            if (!metal.isNothing(this.footer)) {
                this.titaniumComponent.footerView = metal.getView(this.footer);
            }

            // Call parent constructor
            metal.ui.TableView.superclass.constructor.call(this);
        },
        
        /**
         * @method appendRow
         * @param {metal.ui.TableRow/Titanium.UI.TableRow/Object} row
         * @param [optional] {metal.ui.Animation/Titanium.UI.Animation/Object} animation
         */
        appendRow: function(row, animation) {
            this.titaniumComponent.appendRow(metal.getView(row), animation);
            this.data.push(row);
        },
        
        /**
         * @method deleteRow
         * @param {metal.ui.TableRow/Titanium.UI.TableRow/Object/Integer} rowOrIndex
         * @param [optional] {metal.ui.Animation/Titanium.UI.Animation/Object} animation
         */
        deleteRow: function(rowOrIndex, animation) {
        	if (metal.isObject(rowOrIndex)) {
        		for (var i = 0, iln = this.data.length; i < iln; i++) {
        			if (this.data[i] === rowOrIndex) {
        				// Remove this row from both titanium component and self
        				this.titaniumComponent.deleteRow(i, animation);
        				this.data.splice(i, 1);
        				break;
        			}
        		}
        	} else {
        		// Remove this row from both titanium component and self
        		this.titaniumComponent.deleteRow(rowOrIndex, animation);
        		this.data.splice(rowOrIndex, 1);	
        	}
        },
        
        /**
         * @method insertRowAfter
         * @param {String} index
         * @param {metal.ui.TableRow/Titanium.UI.TableRow/Object} row
         * @param [optional] {metal.ui.Animation/Titanium.UI.Animation/Object} animation
         */
        insertRowAfter: function(index, row, animation) {
            this.titaniumComponent.insertRowAfter(index, metal.getView(row), animation);
            this.data.splice(index, 0, row);
        },
        
        /**
         * @method insertRowBefore
         * @param {String} index
         * @param {metal.ui.TableRow/Titanium.UI.TableRow/Object} row
         * @param [optional] {metal.ui.Animation/Titanium.UI.Animation/Object} animation
         */
        insertRowBefore: function(index, row, animation) {
            this.titaniumComponent.insertRowBefore(index, metal.getView(row), animation);
            index = (index == 0) ? 0 : index - 1;
            this.data.splice(index, 0, row);
        },
        
        /**
         * @method scrollToIndex
         * @param {String} index
         * @param [optional] {metal.ui.Animation/Titanium.UI.Animation/Object} animation
         */
        scrollToIndex: function(index, animation) {
            this.titaniumComponent.scrollToIndex(index, animation);
        },
        
        /**
         * @method scrollToTop
         * @param {Float} top
         * @param {Boolean} isAnimated
         */
        scrollToTop: function(top, isAnimated) {
            this.titaniumComponent.scrollToTop(top, {animated: isAnimated || false});
        },
        
        /*
         * @method selectRow
         * @param {String} index
         */
        selectRow: function(index) {
            this.titaniumComponent.selectRow(index);
        },
        
        /**
         * @method deselectRow
         * @param {String} index
         */
        deselectRow: function(index) {
            this.titaniumComponent.deselectRow(index);
        },
        
        /**
         * @method setData
         * @param {Array} data
         * @param [optional] {metal.ui.Animation/Titanium.UI.Animation/Object} animation
         */
        setData: function(data, animation) {
            this.titaniumComponent.setData(data, animation);
            // TODO [TableView::setData] need to dispose of all rows, if there are any
            this.data = data;
        },
        
        /**
         * @method updateRow
         * @param {metal.ui.TableRow/Titanium.UI.TableRow/Object} row
         * @param [optional] {metal.ui.Animation/Titanium.UI.Animation/Object} animation
         */
        updateRow: function(row, animation) {
            this.titaniumComponent.updateRow(metal.getView(row), animation);
        },
        /**
         * Titanium properties
         *
         * @property {Object} titaniumProperties
         */
        titaniumProperties: {
            allowsSelection: {
                type: 'boolean'
            },
            data: {
                type: 'array',
                discard: true // Don't copy this property to metal property
            },
            editable: {
                type: 'boolean'
            },
            editing: {
                type: 'boolean'
            },
            filterAttribute: {
                type: 'string'
            },
            filterCaseInsensitive: {
                type: 'boolean'
            },
            footerTitle: {
                type: 'string'
            },
            footerView: {
                type: 'object',
                discard: true // Don't copy this property to metal property
            },
            headerTitle: {
                type: 'string'
            },
            headerView: {
                type: 'object',
               	discard: true // Don't copy this property to metal property
            },
            index: {
                type: 'array'
            },
            maxRowHeight: {
                type: 'float'
            },
            minRowHeight: {
                type: 'float'
            },
            moving: {
                type: 'boolean'
            },
            rowHeight: {
                type: 'float'
            },
            scrollable: {
                type: 'boolean'
            },
            search: {
                type: 'object',
                discard: true // Don't copy this property to metal property
            },
            searchHidden: {
                type: 'boolean'
            },
            separatorColor: {
                type: 'string'
            },
            separatorStyle: {
                type: 'int'
            },
            style: {
                type: 'int',
                iosOnly: true
            }
        }
    };
})());
