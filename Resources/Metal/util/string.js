metal.ns('metal.string');
/**
 * Metal string
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.string = {
	/**
	 * @method cut
	 * @param {String} text
	 * @param {Integer} maxLength
	 */
	cut: function(text, maxLength) {
		var result = text;
		if (result.length > maxLength) {
			result = text.substring(0, maxLength) + '...';
		} 
		return result;
	},
	
	noblanks: function(text, maxLength) {
		maxLength = (text.length < maxLength || !maxLength)? text.length : maxLength;
		var result = '';
		for (var i = 0; i < maxLength; i++) {
			if (text[i] !== ' ') {
				result += text[i];
			}
		}
		return result;
	}
};
