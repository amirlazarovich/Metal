/**
 * This class represents a UI Controller.
 * It controls over all views in the application.
 * 
 * This controller keeps a stack of views history named 'history' which
 * enables it to control the view's life cycle (fires events such as: beforeopen, 
 * afteropen, beforeclose, afterclose, etc.)
 *
 * @class control
 * @author Amir Lazarovich
 * @version 0.1
 */
metal.control = (function() {
	
	/**
	 * The views controlled by this controller
	 * 
	 * @private
	 * @property {Array} views
	 */
    var views = [];
    
    /**
     * The views history stack 
     * 
     * @private
     * @property {Array} history
     */
    var history = [];
	
	/**
	 * @private 
	 * @method getViewPosition
	 * @param {metal.ui.AbstractView/Titanium.UI.View} view
	 */
    function getViewPosition(view) {
        var position = 'new';
        var myPosition = history.length - 1;
        if (myPosition > 0 && history[myPosition - 1] === view) {
            position = 'back';
        }

        return position;
    };

	/**
     * Closes the current view
     * 
     * @private
     * @method closeCurrentView
     */
    function closeCurrentView() {
        var currentView = history.pop();
        if (!!currentView) {
            if (currentView.fire('beforeclose')) {
            	currentView.hide();
                //currentView.close();
            }
        }
    };
    
    /**
     * Closes the current tab view
     * 
     * @private
     * @method closeCurrentTabView
     */
    function closeCurrentTabView() {
    	var currentView = history[history.length - 1];
    	// If current view is the parent Tab Group
    	// don't pop it out
    	if (!!currentView && currentView.type != 'MetalTabGroup') {
    		// Pop current view
    		history.pop();
    		if (currentView.fire('beforeclose')) {
    			// TODO [control] Do i trust the native TabGroup to close my view?
    			//currentView.hide();
    			//currentView.close();
    		}
    	}
    };
    
    return {
		
		/**
		 * @method apply
		 * @param {String} action The selected action to perform on all views in the history stack
		 * 			I.e. 'on' or 'dismiss'
		 * @param {String} event The selected event to perform on all views in the history stack  
		 * @param {Object/Function} message The message desired to pass for the selected event
		 */
        apply: function(action, event, message) {
            for (var key in history) {
            	if (history.hasOwnProperty(key)) {
            		dlog('control', 'firing event: ' + action + ' on view: ' + history[key]);
                	history[key][action](event, message);	
            	}
            }
        },
        
        /**
         * Add a specific view to this controller
         * 
         * @method add
         * @param {String} id
         * @param {metal.ui.AbstractView/Titanium.UI.View} view
         */
        add: function(id, view) {
            views[id] = view;
            return this;
        },
        
        /**
         * Remove a specific view from this controller
         * 
         * @method remove
         * @param {String} id
         */
        remove: function(id) {
            return delete views[id];
        },
        
        /**
         * Get a specific view
         * 
         * @method get
         * @param {String} id
         */
        get: function(id) {
        	return views[id];
        },
        
        /**
         * Get all controlled views
         * 
         * @method getViews
         */
        getViews: function() {
        	return views;
        },
        
        /**
         * Get active view (currently displayed)
         * 
         * @method getActive
         */
        getActive: function() {
            var myPosition = history.length - 1;
            if (myPosition >= 0) {
                dlog('control', 'Get active at position: ' + myPosition);
                return history[myPosition];
            } else {
                return null;
            }
        },
        
        /**
         * Set active view
         * 
         * @method setActiveTab
         * @param {metal.ui.AbstractView/Titanium.UI.View} view
         * @param {metal.ui.Animation/Titanium.UI.Animation/Object} animation 
         */
        setActive: function(view, animation) {
            // Don't open the same view twice
			if (this.getActive() === view) {
				return;
			}
			
            // Close current view
            closeCurrentView();
			
            // Set a new view
            history.push(view);

            // Show it
            if (view.fire('beforeopen')) {
                view.open(animation);
            }
        },
        
        /**
         * Set active tab view
         * 
         * @method setActiveTab
         * @param {metal.ui.AbstractView/Titanium.UI.View} view
         * @param {metal.ui.Animation/Titanium.UI.Animation/Object} animation 
         */
        setActiveTab: function(view, animation) {
        	// Don't open the same view twice
			if (this.getActive() === view) {
				return;
			}
			
        	// Close current tab
        	closeCurrentTabView();
        	
        	// Set the new tab item
        	history.push(view);
        	
        	// Show it
            if (view.fire('beforeopen')) {
            	// TODO [control] Do i trust the native TabGroup to open my view?
                //view.open(animation);
            }
        },
        
        /**
         * Hide active view or selected view
         * 
         * @method hide
         * @param {string} id The id of the view to hide
         */
        hide: function(id) {
          if (typeof id == 'undefined') {
            getActive().hide();
          } else {
            views[id].hide();
          }
        },
        
        /**
         * Go back one step in the history
         * 
         * @method back
         * @param {metal.ui.Animation/Titanium.UI.Animation/Object} animation
         */
        back: function(animation) {
            // Close current view
            closeCurrentView();

            // Show previous view
            var view = getActive();
            if (view.fire('beforeopen')) {
                view.open(animation);
            }
        },
        
        /**
         * Open a new window
         * 
         * @method open
         * @param {metal.ui.AbstractView/Titanium.UI.View} view
         * @param {metal.ui.Animation/Titanium.UI.Animation/Object} animation
         */
        open: function(view, animation) {
            var nextView = view;

            // If the id of the view was passed,
            // try to find this view by given id
            if (typeof nextView == 'string') {
                nextView = views[view];
            }

            // If no view was found or passed, then return
            if (nextView === undefined || nextView == null) {
                wlog('control', 'Couldn\'t open a view since it wasn\'t found/passed');
                return;
            }

            // Find next view's position (back or new)
            switch (getViewPosition(nextView)) {
                case 'new':
                    dlog('control', 'case new');
                    this.setActive(nextView, animation);
                    break;

                case 'back':
                    dlog('control', 'case back');
                    this.back(animation);
                    break;
            }

            dlog('control', 'history length: ' + history.length);
        },
        
        /**
         * Opens a child view for current active tab
         * 
         * @method openChild
         * @param {Titanium.UI.View / metal.ui.AbstractView} view
         * @param {Object / metal.ui.Animation} animation 
         */
        openChild: function(view, animation) {
        	var nextView = view;
        	
        	// If the id of the view was passed,
            // try to find this view by given id
            if (typeof nextView == 'string') {
                nextView = views[view];
            }

            // If no view was found or passed, then return
            if (nextView === undefined || nextView == null) {
                wlog('control', 'Couldn\'t open a view since it wasn\'t found/passed');
                return;
            }
            
            // Open child view
            // TODO [control::openChild] Handle tab child views in a better way (save in history, etc.)
            this.getActive().open(metal.getView(nextView), animation);
        },
        /**
         * Register an event to all views
         *
         * @method on
         * @param {String} event
         * @param {Function} cb The callback function
         * @param [optional] {Boolean} post If this value is true,
         *              then will post this event on all its views
         */
        on: function(event, cb, post) {
            if (post === true) {
                this.apply('on', event, cb);
            } else {
                var activeView = this.getActive();
                activeView.on(event, cb);
            }
        },
        /**
         * Dismisses an event from all views
         *
         * @method dismiss
         * @param {String} event
         * @param {Function} cb The callback function
         * @param [optional] {Boolean} post If this value is true,
         *              then will post this event on all its views
         */
        dismiss: function(event, cb, post) {
            if (post === true) {
                this.apply('dismiss', event, cb);
            } else {
                var activeView = this.getActive();
                activeView.dismiss(event, cb);
            }
        },
        /**
         * Fires an event for all views
         *
         * @method fire
         * @param {String} event The event name
         * @param {Function} obj The event parameter sent to listener
         * @param [optional] {Boolean} post If this value is true,
         *              then will post this event on all its views
         */
        fire: function(event, obj, post) {
            if (post === true) {
                this.apply('fire', event, obj);
            } else {
                var activeView = this.getActive();
                activeView.fire(event, obj);
            };
        }
    };
})();
