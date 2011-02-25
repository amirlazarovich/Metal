/**
 * Controls all views
 *
 * @class control
 */
metal.control = (function() {

    var views = [];
    var history = [];

    function getViewPosition(view) {
        var position = 'new';
        var myPosition = history.length - 1;
        if (myPosition > 0 && history[myPosition - 1] === view) {
            position = 'back';
        }

        return position;
    };

    function closeCurrentView() {
        var currentView = history.pop();
        if (!!currentView) {
            if (currentView.fire('beforeclose')) {
            	currentView.hide();
                //currentView.close();
            }
        }
    };
    
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

        apply: function(action, event, message) {
            for (var key in history) {
            	if (history.hasOwnProperty(key)) {
            		dlog('control', 'firing event: ' + action + ' on view: ' + history[key]);
                	history[key][action](event, message);	
            	}
            }
        },
        add: function(id, view) {
            views[id] = view;
            return this;
        },
        remove: function(id) {
            return delete views[id];
        },
        
        get: function(id) {
        	return views[id];
        },
        
        getViews: function() {
        	return views;
        },
        
        getActive: function() {
            var myPosition = history.length - 1;
            if (myPosition >= 0) {
                dlog('control', 'Get active at position: ' + myPosition);
                return history[myPosition];
            } else {
                return null;
            }
        },
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
        
        hide: function(id) {
          if (typeof id == 'undefined') {
            getActive().hide();
          } else {
            views[id].hide();
          }
        },
        
        back: function(animation) {
            // Close current view
            closeCurrentView();

            // Show previous view
            var view = getActive();
            if (view.fire('beforeopen')) {
                view.open(animation);
            }
        },
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
        on : function(event, cb, post) {
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
        dismiss : function(event, cb, post) {
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
        fire : function(event, obj, post) {
            if (post === true) {
                this.apply('fire', event, obj);
            } else {
                var activeView = this.getActive();
                activeView.fire(event, obj);
            };
        }
    };
})();
