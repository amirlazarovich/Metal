metal.ns('simple.ui.SimpleWindow.js');

/**
 * Really simple window
 * 
 * @class simple.ui.SimpleWindow
 * @author Amir Lazarovich
 * @version 0.1
 */
simple.ui.SimpleWindow = metal.extend(metal.ui.Window, {
	
	/**
	 * @override
	 */
	properties: {
		id:'simplewindow',
		barColor: 'black',
		backgroundColor: 'white'
	}
});