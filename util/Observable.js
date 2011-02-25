metal.ns('metal.util.Observable');

/**
 * This abstract class represents an Observable object
 * An Observable object may have listeners (delegates) that at some
 * point during the application will be invoked  
 * 
 * @abstract
 * @class Observable
 */
metal.util.Observable = metal.extend(Object, {
	
	/**
	 * The Titanium component this Observable controls over
	 * 
	 * @property {Titanium.UI.View} titaniumComponent
	 */
	titaniumComponent: undefined,
	
	/**
	 * @constructor
	 */
	constructor: function(config) {
		// Apply overrides
		metal.apply(this, config);
		dlog('Observable::' + this.get('id'), 'constructor');
		
		// Call parent
		metal.util.Observable.superclass.constructor.call(this);
	},
    
    /**
     * Register an event
     *
     * @method on
     */
    on: function(event, cb) {
        this.titaniumComponent.addEventListener(event, cb);
    },
    /**
     * Dismisses an event
     *
     * @method dismiss
     */
    dismiss: function(event, cb) {
        this.titaniumComponent.removeEventListener(event, cb);
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
            this.titaniumComponent.fireEvent(event, obj);
        }
    }
});
