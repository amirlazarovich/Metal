metal.ns('metal.ux');

/**
 * 
 * @class metal.ux.LoadingIndicator
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.ux.LoadingIndicator = metal.extend(metal.widget.ActivityIndicator, {
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
		id: 'MetalLoadingIndicator_' + metal.generateId(),
		
		height: 150,
		width: 150,
		zIndex: 10,
		backgroundColor: 'black',
		opacity: 0.8,
		top: (metal.height / 2) - 120,
		borderRadius: 10,
		
		// Message
		message: {
			color: 'white',
			font:{fontFamily:'Helvetica Neue', fontSize:14,fontWeight:'normal'},
			text: 'Loading...'
		}
	}
});
