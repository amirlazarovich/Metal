metal.ns('metal.ui.TableRow');

/**
 *
 * @class metal.ui.TableRow
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.TableRow = metal.extend(metal.ui.AbstractView, {

	type: 'MetalTableRow',

	properties: {
		id: 'MetalTableRow_' + metal.generateId(),
		/**
 		* <p>default color of the row when not selected</p>
 		*
 		* @property {string} color
 		*/
		color: undefined,

		/**
 		* <p>render a system provided check mark in the right image area of the row cell</p>
 		*
 		* @property {boolean} hasCheck
 		*/
		hasCheck: undefined,
		/**
 		* <p>render a system provided right arrow in the right image area of the row cell</p>
 		*
 		* @property {boolean} hasChild
 		*/
		hasChild: undefined,
		/**
 		* <p>render a system provided blue indicator icon in the right image area of the row cell</p>
 		*
 		* @property {boolean} hasDetail
 		*/
		hasDetail: undefined,

		/**
 		* <p>the indention level for the cell (defaults to 0)</p>
 		*
 		* @property {int} indentionLevel
 		*/
		indentionLevel: undefined,
		/**
 		* <p>the layout algorithm to use for the layout. either absolute (default) or vertical.</p>
 		*
 		* @property {string} layout
 		*/
		layout: undefined,

		/**
 		* <p>image url to render in the left image area of the row cell</p>
 		*
 		* @property {string} leftImage
 		*/
		leftImage: undefined,

		/**
 		* <p>image url to render in the right image area of the row cell</p>
 		*
 		* @property {string} rightImage
 		*/
		rightImage: undefined,
		/**
 		* <p>the background color to render when the row cell is selected</p>
 		*
 		* @property {string} selectedBackgroundColor
 		*/
		selectedBackgroundColor: undefined,
		/**
 		* <p>the background image to render when the row cell is selected</p>
 		*
 		* @property {string} selectedBackgroundImage
 		*/
		selectedBackgroundImage: undefined,
		/**
 		* <p>color of the row during selection</p>
 		*
 		* @property {string} selectedColor
 		*/
		selectedColor: undefined,
		/**
 		* <p>a selection style constant to control the selection color. For iPhone, use the constants from Titanium.UI.iPhone.TableViewCellSelectionStyle</p>
 		*
 		* @property {int} selectionStyle
 		*/
		selectionStyle: undefined,

		/**
 		* <p>the title cell value. do not specify if using views as children of the row</p>
 		*
 		* @property {string} title
 		*/
		title: undefined,
		
		/**
		 * @override
		 */
		width: metal.width
	},

	/**
 	* The Titanium view this class wraps
 	*
 	* @property {Ti.UI.TableViewRow} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('MetalTableRow::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createTableViewRow(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.TableRow.superclass.constructor.call(this);
	}
});
