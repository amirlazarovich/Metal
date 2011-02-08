metal.ns('metal.ui.AbstractMetalView');

/**
 * Base class for all Metal views
 * 
 * @class AbstractMetalView
 */
metal.ui.AbstractMetalView = metal.extend(Object, {
    
    /**
     * The id of this view
     *
     * @private
     * @property {String} id
     */
    id: 'AbstractMetalView',
    
    type: 'metal',
    
    /**
     * Holds all this view's properties
     *
     * @property {Object} properties
     */
    properties : {

    },

    /**
     * The native view this class wraps
     *
     * @property {Titanium.UI.View} view
     */
    view: undefined,

    /**
     * The views associated with this class
     *
     * @property {Titanium.UI.View / metal.ui.AbstractMetalView} items
     */
    items: [],

    /**
     * This view's controller
     *
     * @property {metal.core.control} controller
     */
    controller: undefined,

    /**
     * @constructor
     * @param {Object} config
     */
    constructor: function(config) {
        metal.overrideClass(this, config);
        metal.debug.info('AbstractMetalView::' + this.id, 'constructor');

        // Add bidirectional association
        this.controller = metal.control.add(this.id, this);

        // If any tabs were sent, add them now
        this.add(this.items);

        this.initComponents();
        this.initEvents();
        // Call parent constructor
        metal.ui.AbstractMetalView.superclass.constructor.call(this);
    },
    
    /**
     * 
     * @method animate
     * @param {Object} obj
     * @param {Function} cb
     */
    animate: function(obj, cb) {
      this.view.animate(obj, cb || function() {});
    },
    
    /**
     *
     * @method getView
     */
    getView: function() {
        return this.view;
    },
    /**
     *
     * @method getItems
     */
    getItems: function() {
        return this.items;
    },
    
    /**
     * 
     * @method getType
     */
    getType: function() {
      return this.type;
    },
    
    /**
     *
     * @method get
     * @param {String} name
     */
    get: function(name) {
        return this.properties[name];
    },
    /**
     *
     * @method set
     * @param {String or Object} nameOrObject
     * @param {Object} value
     */
    set: function(nameOrObject, value) {
        if (typeof nameOrObject == 'object') {
          metal.apply(this, nameOrObject);
        } else {
          this.properties[nameOrObject] = value;
          //TODO [AbstractMetalView::set] need to set the views property in a better way
          if (value.type == 'metal') {
            this.view[nameOrObject] = value.getView();
          } else {
            this.view[nameOrObject] = value;
          }
        }
    },
    
    /**
     *
     * @method add
     * @param {[Array of] Titanium.UI.View or metal.ui.AbstractMetalView} items
     */
    add: function(items) {
        if (metal.isArray(items)) {
            for (var i in items) {
                if (items[i].type == 'metal') {
                    this.view.add(items[i].getView());
                } else {
                    this.view.add(items[i]);
                }
            }
        } else {
            if (items.type == 'metal') {
                this.view.add(items.getView());
            } else {
                this.view.add(items);
            }
        }
    },
    /**
     * 
     * @method setToolbar
     * @param {[Array of] Titanium.UI.View or metal.ui.AbstractMetalView} items
     */
    setToolbar: function(items) {
      if (metal.isArray(items)) {
          var toolbar = [];
            for (var i in items) {
                if (typeof items[i].controller != 'undefined') {
                    toolbar.push(items[i].getView());
                } else {
                    toolbar.push(items[i]);
                }
            }
            this.view.setToolbar(toolbar);
        } else {
           throw this.id + ': Trying to pass a setToolbar function something other than Array';
        }
    },
    /**
     *
     * @method open
     */
    open: function() {
        this.view.open();
    },
    
    /**
     * 
     * @method remove
     * @param {Titanium.UI.View or metal.ui.AbstractMetalView} item
     */
    remove: function(item) {
      if (typeof item.controller != 'undefined') {
        this.view.remove(item.getView());
      } else {
        this.view.remove(item);
      } 
    },
    
    /**
     * Register an event
     *
     * @method on
     */
    on: function(event, cb) {
        this.view.addEventListener(event, cb);
    },
    /**
     * Dismisses an event
     *
     * @method dismiss
     */
    dismiss: function(event, cb) {
        this.view.removeEventListener(event, cb);
    },
    /**
     * Fires an event
     *
     * @method fire
     * @param event The event name
     * @param {Function} obj The event parameter sent to listener
     */
    fire: function(event, obj) {
        metal.debug.info('AbstractMetalView::' + this.id, 'event fired: ' + event);
        if (typeof this[event] != "undefined") {
            return this[event](obj);
        } else {
            this.view.fireEvent(event, obj);
        }
    },
    /**
     * Hide this window
     *
     * @method hide
     */
    hide: function() {
        this.view.hide();
    },
    /**
     * Close this window
     *
     * @method close
     */
    close: function() {
        this.view.close();
    },
    /**
     *
     * @method initComponents
     */
    initComponents: function() {
        metal.debug.info('AbstractMetalView::' + this.id, 'initComponents');
    },
    /**
     *
     * @method initEvents
     */
    initEvents: function() {
        metal.debug.info('AbstractMetalView::' + this.id, 'initEvents');
    },
    /**
     *
     * @event beforeopen
     * @param {Object} obj
     */
    beforeopen: function(obj) {
        metal.debug.info('AbstractMetalView::' + this.id, 'before open event');
        return true;
    },
    /**
     *
     * @event beforeclose
     * @param {Object} obj
     */
    beforeclose: function(obj) {
        metal.debug.info('AbstractMetalView::' + this.id, 'before close event');
        return true;
    }
});
