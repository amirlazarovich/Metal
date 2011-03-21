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
	 * The nested views history of each Tab view
	 * 
	 * @private
	 * @property {Array} tabHistory
	 */
	var tabHistory = [];
	
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
     * Closes the current tab view
     * 
     * @private
     * @method closeCurrentTabView
     */
    function closeCurrentTabView() {
    	var currentView = metal.control.getActive();// history[history.length - 1];
    	// If current view is the parent Tab Group
    	// don't pop it out
    	if (!!currentView && currentView.type != 'MetalTabGroup') {
    		// Pop current view
    		metal.control.release();
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
            		dlog('control::apply', 'firing event: ' + action + ' on view: ' + history[key]);
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
                dlog('control::getActive', 'Get active at position: ' + myPosition);
                return history[myPosition];
            } else {
                return null;
            }
        },
        
        /**
         * Get previous displayed screen
         * 
         * @method getPrevious
         */
        getPrevious: function() {
        	var position = history.length - 2;
        	var tHistory = this.getActiveTabHistory();
        	var screen;
        	
        	if (tHistory) {
        		position = tHistory.length - 2;
        		if (position >= 0) {
        			screen = tHistory[position];
        		} else {
        			screen = this.getActive();	
        		}
        	} else if (position >= 0) {
        		screen = history[position];
        	} 
        	return screen;
        },
        
     	/**
         * Get tab history
         * 
         * @method getTabHistory
         * @param {String} id
         */
        getTabHistory: function(id) {
        	return tabHistory[id];
        },
        
        /**
         * @method getActiveTab
         */
        getActiveTabHistory: function() {
        	var tab = this.getActive();
        	return tabHistory[metal.getView(tab).id];
        },
        
        /**
         * Get the active nested view inside 
         * the active tab
         * 
         * @method getNestedActive
         */
        getNestedActive: function() {
        	var activeTabHistory = this.getActiveTabHistory();
        	var view;
        	if (activeTabHistory) {
        		var index = activeTabHistory.length > 0 ? activeTabHistory.length - 1 : 0;
        		view = activeTabHistory[index];
        	}
        	return view;
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
            this.release();
			
            // Set a new view
            history.push(view);

            // Show it
            if (view.fire('beforeopen')) {
            	metal.getView(view).open(animation);
            }
            
            // Log...
            dlog('control::setActive', metal.getView(view).id);
            dlog('control::setActive', 'history length: ' + history.length);
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
				wlog('control::setActiveTab', 'trying to close the same tab view');
				return;
			}
			
        	// Close current tab
        	closeCurrentTabView();
        	
        	// Set the new tab item
        	history.push(view);
        	
        	// Create tab history if this is the first time 
        	var id = metal.getView(view).id;
        	if (metal.isNothing(id)) {
        		// Generate an id
        		id = metal.generateId();
        		if (view.framework == 'metal') {
        			view.set('id', id);
        		} else {
        			view.id = id;
        		}
        	}
    		tabHistory[id] = tabHistory[id] || [];	
        	
        	// Show it
            if (view.fire('beforeopen')) {
            	// TODO [control] Do i trust the native TabGroup to open my view?
                //metal.getView(view).open(animation);
            }
            
            // Log...
            dlog('control::setActiveTab', id);
            dlog('control::setActiveTab', 'history length: ' + history.length);
        },
        
        /**
         * Hide active view or selected view
         * 
         * @method hide
         * @param {string} id The id of the view to hide
         */
        hide: function(id) {
          if (metal.isNothing(id)) {
            metal.getView(this.getActive()).hide();
          } else {
            metal.getView(views[id]).hide();
          }
        },
        
        /**
         * Release view from history
         * Can be either from the main history or the tab history
         * 
         * @method release
         * @param {String} type Choose one of the following: 'main', 'nested' [default: 'main']
         */
        release: function(type) {
        	type = type || 'main';
        	var view;
        	var historyLog;
        	var position;
        	
        	switch (type) {
        		case 'main': 
        			position = history.length - 1;
        			if (position > 0) {
        				view = history[position];
	        			if (view.fire('beforeclose')) {
	        				history.pop();
	        			}
	        			historyLog = 'history length: ' + history.length;	
        			}
        			break;
        		
        		case 'tab':
        			var nestedHistory = this.getActiveTabHistory();
        			if (nestedHistory) {
        				position = nestedHistory.length - 1;
        				if (position > 0) {
        					view = nestedHistory[position];
        					if (view.fire('beforeclose')) {
        						nestedHistory.pop();
        						historyLog = 'Tab[' + metal.getView(this.getActive()).id + '] history length: ' + nestedHistory.length;
        					}
        				}
        				
        			} else {
        				wlog('control::release', 'Trying to release a nested tab view of an undefined Tab history');
        			}
        			break;
        	}
        	
        	if (view) {
        		// Log...
        		dlog('control::release', metal.getView(view).id);
        		dlog('control::release', historyLog);
        	}
        	return view;
        },
        
        /**
         * Go back one step in the history
         * 
         * @method back
         * @param {metal.ui.Animation/Titanium.UI.Animation/Object} animation
         */
        back: function(animation) {
            // Decide which view to go back to: 
            // 1. main view (inside the main history)
            // 2. nested tab view (inside the tab history)
            var nestedHistory = this.getActiveTabHistory();
            var currentView;
            var previousView;
            
            if (nestedHistory) {
            	// Going back inside selected tab
            	currentView = nestedHistory.pop();
            	previousView = 	this.getNestedActive();
            } else {
            	// Going back in the main history
            	currentView = history.pop();
            	previousView = this.getActive();
            }
            
            if (currentView.fire('beforeclose')) {
            	// Close current view
            	metal.getView(currentView).close(animation);
            	
            	if (previousView) {
            		// Show previous view
            		if (previousView.fire('beforeopen')) {
            			metal.getView(previousView).open(animation);
            		}
            	} else {
            		wlog('control::back', 'Couln\'t open previous view since it wasn\'t found');
            	}
            }
        },
        
        /**
         * Close window
         * This function doesn't really closes a window but mearly fires
         * the event: beforeclose.
         * Why? since Titanium is already handling everything else
         * 
         * @method close 
         * @param {metal.ui.AbstractView/Titanium.UI.View} view
         * @param {metal.ui.Animation/Titanium.UI.Animation/Object} animation
         */
        close: function(view, animation) {
        	// Handle only the history stack since Titanium is
        	// already handling everything else
        	var thisView = this.getActive();
        	var thisNestedView = this.getNestedActive();
        	
        	if (thisView === view) {
        		// Release main window
        		this.release();
        	} else if (thisNestedView === view) {
        		// Release nested tab window
        		this.release('tab');
        	} else {
        		// Oops, something went wrong and it seems 
        		// like you're trying to close a different screen
        		wlog('control::close', 'You\'re trying to close the wrong screen. (requested: ' + metal.getView(view).id + ', actual: ' + metal.getView(thisView).id + ')');
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
            if (metal.isString(nextView)) {
                nextView = views[view];
            }

            // If no view was found or passed, then return
            if (metal.isNothing(nextView)) {
                wlog('control::open', 'Couldn\'t open a view since it wasn\'t found/passed');
                return;
            }

            // Find next view's position (back or new)
            switch (getViewPosition(nextView)) {
                case 'new':
                    dlog('control::open', 'case new');
                    this.setActive(nextView, animation);
                    break;

                case 'back':
                    dlog('control::open', 'case back');
                    this.back(animation);
                    break;
            }
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
        	var current = metal.getView(this.getActive());
        	
        	// Get the actual view object
            if (metal.isString(nextView)) {
                nextView = views[view];
            }

            // If no view was found or passed, then return
            if (metal.isNothing(nextView)) {
                wlog('control::openChild', 'Couldn\'t open a view since the view itself wasn\'t found/passed');
                return;
            }
            
            // Update the tab history
            tabHistory[current.id].push(nextView);
            
            // Open child view
            current.open(metal.getView(nextView), animation);
            
            // Log...
            dlog('control::openChild', 'Tab[' + current.id + '] history length: ' + tabHistory[current.id].length);
        },
        
        /**
         * Send data to either selected screen or previous one.
         * If no window was passed, will send the data by default to 
         * previous screen
         * 
         * @method send
         * @param {Object} data
         * @param [optional] {Titanium.UI.Window | metal.ui.Window} win
         */
        send: function(data, win) { 
			if (!metal.isNothing(win)) {
				// Send data to given screen
				win.fire('update', data);
			} else {
				// Send data to previous screen
				var current = this.getActive();
				var nestedHistory = this.getActiveTabHistory();
				var target;
				var index;
				
				if (nestedHistory) {
					index = nestedHistory.length > 0 ? nestedHistory.length - 2 : 0;
					if (index < 0) {
						// This tab is the only one nested, thus sending data to the 
						// tab view itself
						target = current;
					} else {
						// Send data to previous nested tab view
						target = nestedHistory[index];	
					}
					
				} else {
					index = history.length > 1 ? history.length - 2 : 0;
					target = history[index];
				}
				
				// Send data
				target.fire('update', data);
			}
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







