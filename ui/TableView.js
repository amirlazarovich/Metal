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
 		* @property {Titanium.UI.TableView} component
 		*/
		component: undefined,

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

			/**
 			* <p>true if the rows can be selected</p>
 			*
 			* @property {boolean} allowsSelection
 			*/
			allowsSelection: undefined,
			/**
 			* <p>true if the rows can be selected while editing the table (iOS Only)</p>
 			*
 			* @property {boolean} allowsSelectionDuringEditing
 			*/
			allowsSelectionDuringEditing: undefined,

			/**
 			* <p>the data array of objects to be used for the rows of the table view</p>
 			*
 			* @property {array} data
 			*/
			data: {
				value: [],
				discard: true // Don't copy this property to metal property
			},
			/**
 			* <p>allow the table view to be editable (this must be true for swipe-to-delete) (iOS Only)</p>
 			*
 			* @property {boolean} editable
 			*/
			editable: undefined,
			/**
 			* <p>boolean to control the editing state of the table view (iOS Only)</p>
 			*
 			* @property {boolean} editing
 			*/
			editing: undefined,
			/**
 			* <p>the filter attribute to be used when searching. this property maps to your data object or a property on the row object</p>
 			*
 			* @property {string} filterAttribute
 			*/
			filterAttribute: undefined,
			/**
 			* <p>boolean to indicate if the search should be case sensitive or case insensitive (default)</p>
 			*
 			* @property {boolean} filterCaseInsensitive
 			*/
			filterCaseInsensitive: undefined,

			/**
 			* <p>the table view footer title</p>
 			*
 			* @property {string} footerTitle
 			*/
			footerTitle: undefined,
			/**
 			* <p>the table view footer as a view that will be rendered instead of a label</p>
 			*
 			* @property {object} footerView
 			*/
			footerView: {
				value: undefined,
				discard: true // Don't copy this property to metal property
			},
			/**
 			* <p>the table view header title</p>
 			*
 			* @property {string} headerTitle
 			*/
			headerTitle: undefined,
			/**
 			* <p>the table view header as a view that will be rendered instead of a label</p>
 			*
 			* @property {object} headerView
 			*/
			headerView: {
				value: undefined,
				discard: true // Don't copy this property to metal property
			},

			/**
 			* <p>an array of objects (with title and index properties) to control the table view index</p>
 			*
 			* @property {array} index
 			*/
			index: undefined,

			/**
 			* <p>max row height for table view rows</p>
 			*
 			* @property {float} maxRowHeight
 			*/
			maxRowHeight: undefined,
			/**
 			* <p>min row height for table view rows</p>
 			*
 			* @property {float} minRowHeight
 			*/
			minRowHeight: undefined,
			/**
 			* <p>boolean to control the moveable state of the table view (iOS Only)</p>
 			*
 			* @property {boolean} moving
 			*/
			moving: undefined,

			/**
 			* <p>default row height for table view rows</p>
 			*
 			* @property {float} rowHeight
 			*/
			rowHeight: undefined,
			/**
 			* <p>true (default) if tableview can be scrolled</p>
 			*
 			* @property {boolean} scrollable
 			*/
			scrollable: undefined,
			/**
 			* <p>the search field to use for the table view</p>
 			*
 			* @property {object} search
 			*/
			search: {
				value: undefined,
				discard: true // Don't copy this property to metal property
			},
			/**
 			* <p>boolean to control the visibility of the search field</p>
 			*
 			* @property {boolean} searchHidden
 			*/
			searchHidden: true,
			/**
 			* <p>the separator color color as a hex or named value</p>
 			*
 			* @property {string} separatorColor
 			*/
			separatorColor: undefined,
			/**
 			* <p>the separator style constant. For iPhone, Titanium.UI.iPhone.TableViewSeparatorStyle</p>
 			*
 			* @property {int} separatorStyle
 			*/
			separatorStyle: undefined,

			/**
 			* <p>iPhone only. the style of the table view. constant from <a href="Titanium.UI.iPhone.TableViewStyle-object.html">Titanium.UI.iPhone.TableViewStyle</a></p>
 			*
 			* @property {int} style
 			*/
			style: {
				value: undefined,
				android: false
			}

		},

		/**
 		* @constructor
 		* @param {Object} config
 		*/
		constructor: function(config) {
			metal.overrideClass(this, config);
			dlog('MetalTableView::' + this.get('id'), 'constructor');

			// Set Titanium component
			this.component = Ti.UI.createTableView(metal.formatProperties(this.properties));

			// Set data/serach bar if passed
			// TODO [TableView::constructor] Handle table header in a better way
			this.component.data = parseData(this.data, this.header);
			this.component.search = this.search;
			if (!metal.isNothing(this.footer)) {
				this.component.footerView = metal.getView(this.footer);
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
			this.component.appendRow(metal.getView(row), animation);
			this.data.push(row);
		},
		/**
 		* @method deleteRow
 		* @param {metal.ui.TableRow/Titanium.UI.TableRow/Object/Integer} rowOrIndex
 		* @param [optional] {metal.ui.Animation/Titanium.UI.Animation/Object} animation
 		*/
		deleteRow: function(rowOrIndex, animation) {
			var data = this.get('data');

			if (metal.isObject(rowOrIndex)) {
				for (var i = 0, iln = data.length; i < iln; i++) {
					if (data[i] === rowOrIndex) {
						// Remove this row from both titanium component and self
						this.component.deleteRow(i, animation);
						data.splice(i, 1);
						break;
					}
				}
			} else {
				// Remove this row from both titanium component and self
				this.component.deleteRow(rowOrIndex, animation);
				data.splice(rowOrIndex, 1);
			}
		},
		/**
 		* @method insertRowAfter
 		* @param {String} index
 		* @param {metal.ui.TableRow/Titanium.UI.TableRow/Object} row
 		* @param [optional] {metal.ui.Animation/Titanium.UI.Animation/Object} animation
 		*/
		insertRowAfter: function(index, row, animation) {
			this.component.insertRowAfter(index, metal.getView(row), animation);
			this.data.splice(index, 0, row);
		},
		/**
 		* @method insertRowBefore
 		* @param {String} index
 		* @param {metal.ui.TableRow/Titanium.UI.TableRow/Object} row
 		* @param [optional] {metal.ui.Animation/Titanium.UI.Animation/Object} animation
 		*/
		insertRowBefore: function(index, row, animation) {
			this.component.insertRowBefore(index, metal.getView(row), animation);
			index = (index == 0) ? 0 : index - 1;
			this.data.splice(index, 0, row);
		},
		/**
 		* @method scrollToIndex
 		* @param {String} index
 		* @param [optional] {metal.ui.Animation/Titanium.UI.Animation/Object} animation
 		*/
		scrollToIndex: function(index, animation) {
			this.component.scrollToIndex(index, animation);
		},
		/**
 		* @method scrollToTop
 		* @param {Float} top
 		* @param {Boolean} isAnimated
 		*/
		scrollToTop: function(top, isAnimated) {
			this.component.scrollToTop(top, {animated: isAnimated || false});
		},
		/*
 		* @method selectRow
 		* @param {String} index
 		*/
		selectRow: function(index) {
			this.component.selectRow(index);
		},
		/**
 		* @method deselectRow
 		* @param {String} index
 		*/
		deselectRow: function(index) {
			this.component.deselectRow(index);
		},
		/**
 		* @method setData
 		* @param {Array} data
 		* @param [optional] {metal.ui.Animation/Titanium.UI.Animation/Object} animation
 		*/
		setData: function(data, animation) {
			this.component.setData(data, animation);
			// TODO [TableView::setData] need to dispose of all rows, if there are any
			this.data = data;
		},
		/**
 		* @method setHeader
 		* @param {metal.ui.AbstractView/Titanium.UI.View} header
 		*/
		setHeader: function(header) {
			if (metal.isNothing(header)) {
				return;
			}

			var data = this.get('data');
			var store = [];
			var section = new metal.ui.TableSection();
			section.setHeader(header);

			if (data.length > 0) {
				section.add(data);
				store.push(section.getView());
			}

			this.component.data = store;
		},
		/**
 		* @override
 		* @method set
 		* @param {String or Object} nameOrObject
 		* @param {Object} value
 		*/
		set: function(nameOrObject, value) {
			if (nameOrObject == 'header') {
				// Special case: Setting the header
				this.setHeader(value);
			} else if (metal.isObject(nameOrObject)) {
				// Object
				metal.overrideClass(this, nameOrObject);
			} else {
				// Name
				if (this.isTitaniumProperty(nameOrObject)) {
					this.component[nameOrObject] = metal.getView(value);
				}

				if (this.isDiscarded(nameOrObject)) {
					this[nameOrObject] = value;
				} else {
					this.properties[nameOrObject] = value;
				}
			}
		},
		/**
 		* @method updateRow
 		* @param {metal.ui.TableRow/Titanium.UI.TableRow/Object} row
 		* @param [optional] {metal.ui.Animation/Titanium.UI.Animation/Object} animation
 		*/
		updateRow: function(row, animation) {
			this.component.updateRow(metal.getView(row), animation);
		}
	};
})());
