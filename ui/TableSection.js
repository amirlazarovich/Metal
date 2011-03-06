metal.ns('metal.ui.TableSection');

/**
 *
 * @class metal.ui.TableSection
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.TableSection = metal.extend(metal.ui.AbstractView, {

	type: 'MetalTableSection',

	properties: {
		id: 'MetalTableSection',
		/**
 		* <p>the title of the section footer</p>
 		*
 		* @property {string} footerTitle
 		*/
		footerTitle: null,
		/**
 		* <p>a view to use instead of the default label when rendering the section footer</p>
 		*
 		* @property {object} footerView
 		*/
		footerView: {
			value: undefined,
			discard: true
		},
		/**
 		* <p>the title of the section header</p>
 		*
 		* @property {string} headerTitle
 		*/
		headerTitle: null,
		/**
 		* <p>a view to use instead of the default label when rendering the section header</p>
 		*
 		* @property {object} headerView
 		*/
		headerView: {
			value: undefined,
			discard: true
		},

		/**
 		* <p>the (readonly) number of rows in the section</p>
 		*
 		* @property {int} rowCount
 		*/
		rowCount: {
			value: 0,
			readonly: true
		}
	},

	/**
 	* The Titanium view this class wraps
 	*
 	* @property {Titanium.UI.TableViewSection} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('MetalTableSection::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createTableViewSection(metal.formatProperties(this.properties));

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
					this.component.add(items[i].getView());
				} else {
					row = new metal.ui.TableRow(items[i]);
					this.component.add(row.getView());
				}
			}
		} else {
			if (items.framework == 'metal') {
				this.component.add(items.getView());
			} else {
				row = new metal.ui.TableRow(items[i]);
				this.component.add(row.getView());
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
	}
});
