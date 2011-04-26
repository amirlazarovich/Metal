metal.ns('metal.ui');

/**
 *
 * @class metal.ui.WebView
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ui.WebView = metal.extend(metal.ui.AbstractView, {

	type: 'MetalWebView',

	/**
 	* Holds all this view's properties
 	*
 	* @property {Object} properties
 	*/
	properties : {
		/**
 		* The id of this window
 		*
 		* @private
 		* @property {String} id
 		*/
		id: 'MetalWebView_' + metal.generateId(),
		/**
 		* <p>a data blob or file that is used to load the web document</p>
 		*
 		* @property {object} data
 		*/
		data: undefined,

		/**
 		* <p>the html content of the web document</p>
 		*
 		* @property {string} html
 		*/
		html: '<html></html>',
		/**
 		* <p>boolean indicating if the webview is loading content</p>
 		*
 		* @property {boolean} loading
 		*/
		loading: undefined,

		/**
 		* <p>whether the webview should scale it's contents or not</p>
 		*
 		* @property {boolean} scalesPageToFit
 		*/
		scalesPageToFit: undefined,

		/**
 		* <p>the url to the web document. this property will change as the content of the webview changes (such as from internal hyperlinks, etc)</p>
 		*
 		* @property {string} url
 		*/
		url: undefined
	},

	/**
 	* The Titanium view this class wraps
 	*
 	* @property {Titanium.UI.View} component
 	*/
	component: undefined,

	/**
 	* @constructor
 	* @param {Object} config
 	*/
	constructor: function(config) {
		metal.overrideClass(this, config);
		dlog('WebView::' + this.get('id'), 'constructor');

		// Set Titanium component
		this.component = Ti.UI.createWebView(metal.formatProperties(this.properties));

		// Call parent constructor
		metal.ui.WebView.superclass.constructor.call(this);
	},
	
	/**
	 * returns true if the webview can go back in history
	 * @method canGoBack
	 */
	canGoBack: function() {
		return this.component.canGoBack();
	},
	
	/**
	 * returns true if the webview can go forward in history
	 * @method canGoForward
	 */
	canGoForward: function() {
		return this.component.canGoForward();
	},
	
	/**
	 * invoke JavaScript inside the context of the webview and optionally, return a result
	 * @method evalJS
	 * @param {String} content JavaScript code as a string. The code will be evaluated inside the webview context.
	 */
	evalJS: function(content) {
		return this.component.evalJS(content);
	},
	
	/**
	 * go back one entry in history to the previous page
	 * @method goBack
	 */
	goBack: function() {
		this.component.goBack();
	},
	
	/**
	 * go forward one entry in history to the page before the current page
	 * @method goForward
	 */
	goForward: function() {
		this.component.goForward();
	},
	
	/**
	 * reload the current webpage
	 * @method reload
	 */
	reload: function() {
		this.component.reload();
	},
	
	/**
	 * force the webview to repaint its contents
	 * @method repaint
	 */
	repaint: function() {
		this.component.repaint();
	},
	
	/**
	 * set the basic authentication for the webview instance to be used on subsequent url requests
	 * @method setBasicAuthentication
	 * @param {String} username
	 * @param {String} password
	 */
	setBasicAuthentication: function(username, password) {
		this.component.setBasicAuthentication(username, password);
	},
	
	/**
	 * make the view visible
	 * @method show
	 */
	show: function() {
		this.component.show();
	},
	
	/**
	 * stop loading a currently loading page
	 * @method stopLoading
	 */
	stopLoading: function() {
		this.component.stopLoading();
	}
});
