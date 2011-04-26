/**
 * Adapter for android
 */

/**
* Android adapter set - Adding views one by one
* 
* @method add
* @param {[Array of] Titanium.UI.View or metal.ui.AbstractView} items
*/
metal.ui.AbstractView.prototype.add = function(items) {
    var width = 0;
    var padding = 0; // Default padding value
    var spacer;
    var spacerIndex;
    var views = [];
    var view;
    var left;
    var right;
   	var tempWidth;
    var i;

    if (metal.isArray(items)) {
            // Array
            for (i = 0, iln = items.length; i < iln; i++) {
                    if (items[i].type == 'spacer') {
                            spacerIndex = i;
                            if (!items[i].dir) {
                                    spacer = new metal.ui.View({id: 'spacer'});
                                    views.push(spacer.getView());
                                    this.items.push(spacer);
                            }
                    } else {
                            view = metal.getView(items[i]);
                            // Calculate the true width of this view
                            left = metal.isNumber(view.left) ? parseFloat(view.left) : 0;
                            right = metal.isNumber(view.right) ? parseFloat(view.right) : 0;
                            try {
                                tempWidth = parseFloat(view.width);
                            } catch (e) {
                                tempWidth = 0;
                            }
	                        width += tempWidth + left + right;

                            views.push(view);
                            this.items.push(items[i]);
                    }
            }

            if (metal.isUndefined(spacerIndex)) {
                for (i = 0, iln = views.length; i < iln; i++) {
                    this.component.add(views[i]);
                }
            } else {
                    // Append spacer
                    var dir = items[spacerIndex].dir;
                    padding = items[spacerIndex].padding || padding;
                    if (!!dir) {
                            views[spacerIndex][dir] = width + padding;
                    } else {
                            var entireWidth = parseFloat(this.get('width')) || parseFloat(this.component.width) || metal.width;
                            views[spacerIndex].width = entireWidth - width - 2 * padding;
                            views[0].left = padding;
                    }

                    for (i = 0, iln = views.length; i < iln; i++) {
                        this.component.add(views[i]);
                    }
            }
    } else if (!metal.isNothing(items)) {
            // Single object
            this.component.add(metal.getView(items));
            this.items.push(items);
    }
};