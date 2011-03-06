metal.ns('metal.util.Observable');

/**
 * This abstract class represents an Observable object
 * An Observable object may have listeners (delegates) that at some
 * point during the application will be invoked  
 * 
 * @abstract
 * @class metal.util.Observable
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.util.Observable = metal.extend(Object, {
	
	/**
	 * The Titanium component this Observable controls over
	 * 
	 * @property {Titanium.UI.View} component
	 */
	component: undefined,
	
	/**
	 * @constructor
	 */
	constructor: function(config) {
		// Apply overrides
		metal.apply(this, config);
		dlog('Observable::' + this.get('id'), 'constructor');
		
		this.initEvents();
		
		// Call parent
		metal.util.Observable.superclass.constructor.call(this);
	},
    
    /**
     *
     * @method initEvents
     */
    initEvents: function() {
       dlog('Observable::' + this.get('id'), 'initEvents');
    },
    
    /**
     * Register an event
     *
     * @method on
     */
    on: function(event, cb) {
        this.component.addEventListener(event, cb);
    },
    /**
     * Dismisses an event
     *
     * @method dismiss
     */
    dismiss: function(event, cb) {
        this.component.removeEventListener(event, cb);
    },
    /**
     * Fires an event
     *
     * @method fire
     * @param event The event name
     * @param {Function} obj The event parameter sent to listener
     */
    fire: function(event, obj) {
        dlog('Observable::' + this.get('id'), 'event fired: ' + event);
        if (typeof this[event] != "undefined") {
            return this[event](obj);
        } else {
            this.component.fireEvent(event, obj);
        }
    }
});
