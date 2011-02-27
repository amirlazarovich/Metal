metal.ns('metal.widget.ImageButton');

/**
 * @class metal.widget.ImageButton
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.widget.ImageButton = metal.extend(metal.ui.View, {

    /**
     * @override
     */
    properties: {
        id: 'imagebutton',
        layout: 'vertical',
        height: 'auto',
        width: 'auto'
    },

    /**
     * @constructor
     * @param {Object} config
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        dlog('ImageButton::' + this.get('id'), 'constructor');

        // Call parent constructor
        metal.widget.ImageButton.superclass.constructor.call(this);
    },
    /**
     * @override
     */
    initComponents: function() {
        dlog('ImageButton::' + this.get('id'), 'initComponents');
        metal.widget.ImageButton.superclass.initComponents.call(this);

        var image = new metal.ui.View({
            backgroundImage: this.get('url'),
            height: this.height || 'auto',
            width: this.width || 'auto'
        });
		
		var labelConfig = this.get('label');
		var label;
		if (labelConfig) {
			label = new metal.ui.Label(labelConfig);
		} else {
			label = new metal.ui.Label({text: this.get('text')});
		}
        label.set('height', label.get('height') || 'auto');
        label.set('width', label.get('width') || 'auto');

        // Add views
        this.add([
        // Image
        image,

        // Label
        label
        ]);
    },
    /**
     * @override
     */
    initEvents: function() {
        dlog('ImageButton::' + this.get('id'), 'initEvents');
        metal.widget.ImageButton.superclass.initEvents.call(this);

        this.on('click', this.onclick || metal.emptyFn);
    },
    /**
     * @override
     */
    titaniumProperties: {
        height: {
            type: 'string',
            discard: true
        },

        width: {
            type: 'string',
            discard: true
        }
    }
});
