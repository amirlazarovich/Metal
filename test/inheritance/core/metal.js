/**
 * Metal Framework
 * This framework enables a Titanium developer to write code in a Object Oriented way
 *
 * @class metal
 */
this.metal = (function() {

    /**
     * @param {String}
     *            namespace1
     * @param {String}
     *            namespace2
     * @param {String}
     *            etc
     * @return {Object} The namespace object. (If multiple arguments are passed,
     *         this will be the last namespace created)
     * @method createNameSpace
     */
    function createNameSpace() {
        var ln = arguments.length, i, value, split, x, xln, parts, object;

        for (i = 0; i < ln; i++) {
            value = arguments[i];
            parts = value.split(".");
            /*
             if (typeof this[parts[0]] == 'undefined') {
             Ti.API.info('[metal] ' + parts[0] + ' was undefined');
             this[parts[0]] = Object(parts[0]);
             }
             */
            object = metal;

            //Ti.API.info('[metal] value: ' + value);
            for (x = 1, xln = parts.length; x < xln; x++) {
                object = object[parts[x]] = Object(object[parts[x]]);
                //Ti.API.info('[metal] object: ' + JSON.stringify(object));
            }
        }

        //Ti.API.info('[metal] object: ' + JSON.stringify(object));
        return object;
    };

    /**
     * Extend an object with the properties from another
     * (thanks Dojo - http://docs.dojocampus.org/dojo/mixin)
     *
     * @param {Object} target
     * @param {Object} source
     */
    function mixin(target, source) {
        var name, s, i;
        for(name in source) {
            if (source.hasOwnProperty(name)) {
                s = source[name];
                if(!(name in target) || (target[name] !== s && (!(name in this.emptyObject) || this.emptyObject[name] !== s))) {
                    target[name] = s;
                }
            }
        }
        return target; // Object
    };

    return {

        /**
         * Metal Configuration
         * 
         * @property {Object} config
         */
        config: {},

        /**
         * Set debug state threshold level:
         * 0 - NONE
         * 1 - ERROR
         * 2 - INFO
         * 3 - DEBUG
         *
         * @property {Integer} DEBUG_STATE
         */
        DEBUG_STATE: undefined,

        /**
         * Set cloud debugging state
         *
         * @property {Boolean} CLOUD_DEBUG
         */
        CLOUD_DEBUG: undefined,

        /**
         * Include scripts
         *
         * @method include
         * @param {String} scripts...
         */
        include: function(/* scripts */) {
         	for (var i = 0, iln = arguments.length; i < iln; i++) {
                Ti.include(arguments[i]);
            }
        },
        /**
         *
         * @method isUndefined
         * @param {Object} obj
         * @return {Boolean}
         */
        isUndefined: function(obj) {
            return typeof obj == 'undefined';
        },
        /**
         * Check if obj is null.
         * In case obj is undefined, it will return false
         *
         * @method isNull
         * @param {Object} obj
         * @return {Boolean}
         */
        isNull: function(obj) {
            return !this.isUndefined(obj) && obj === null;
        },
        /**
         *
         * @method isNothing
         * @param {Object} obj
         * @return {Boolean}
         */
        isNothing: function(obj) {
            return this.isUndefined(obj) || this.isNull(obj);
        },
        /**
         *
         * @method initConfig
         * @param {Object} config
         */
        initConfig: function(config) {
            // If no configuration is given, set default
            if (this.isNothing(config)) {
                this.config = {
                    debugState: 3, // DEBUG
                    cloudebug: false // Set Cloud debugging mode
                };
            }

            // Update
            this.DEBUG_STATE = this.config.debugState;
            this.CLOUD_DEBUG = this.config.cloudebug;
        },
        /**
         * @method initGlobalEvents
         */
        initGlobalEvents: function() {
            var me = this;
            /**
             * Detect orientation change and update screen dimensions
             */
            Ti.Gesture.addEventListener('orientationchange', function(e) {
                // TODO [metal::orientationchange event] Check if this is correct
                me.height = Ti.Platform.displayCaps.platformHeight;
                me.width = Ti.Platform.displayCaps.platformWidth;
                metal.debug.info('[metal] Device height: ' + metal.height + ', width: ' + metal.width);
            });
        },
        /**
         * @param {String}
         *            namespace1
         * @param {String}
         *            namespace2
         * @param {String}
         *            etc
         * @return {Object} The namespace object. (If multiple arguments are passed,
         *         this will be the last namespace created)
         * @method createNameSpace
         */
        createNameSpace: createNameSpace,

        /**
         * Alias for createNameSpace
         *
         * @method ns
         */
        ns: createNameSpace,

        /**
         * Copies all the properties of config to obj.
         *
         * @param {Object}
         *            object The receiver of the properties
         * @param {Object}
         *            config The source of the properties
         * @param {Object}
         *            defaults A different object that will also be applied for
         *            default values
         * @method apply
         * @return {Object} returns obj
         */
        apply: function(object, config, defaults) {
            // no "this" reference for friendly out of scope calls
            if (defaults) {
                this.apply(object, defaults);
            }
            if (object && config && typeof config == 'object') {
                for ( var key in config) {
                    if (config.hasOwnProperty(key)) {
                        object[key] = config[key];
                    }
                }
            }
            return object;
        },
        
        /**
         * Performs a deep copy from config to object
         * 
         * @method deepApply
         * @param {Object} object
         * @param {Object} config
         * @param [optional] {Boolean} ignoreUndefined
         */
        deepApply: function(object, config, ignoreUndefined, isReversed) {
            if (!metal.isNothing(object) && metal.isObject(config)) {
            	var prop;
            	// Copy the protoype of config to object if exists
            	var proto = config.proto;
            	if (!metal.isNothing(proto)) {
            		// Quick hack for prototyping an object
            		// TODO [metal::deepApply] Find a safer way to prototype an object
            		object.__proto__ = proto;
            	}
            	
            	// Go over all values inside config
                for ( var key in config) {
                    if (config.hasOwnProperty(key)) {
                        if (!metal.isNothing(object[key]) && metal.isObject(config[key])) {
                          	// Perform the deep copy
                          	prop = {};
                          	if (!!isReversed) {
								// Reversing the copy, assuming config is
								// the parent of object and thus we need to 
								// apply it first and at the end the object itself
								// in case there are overrides 
                          		this.apply(prop, config[key]);
                          		this.apply(prop, object[key]);	
                          		var proto = config[key].prototype;
                          		
                          	} else {
                          		// Assuming a normal override where
                          		// config is the overrides of the object
                          		this.apply(prop, object[key]);
                          		this.apply(prop, config[key]);
                          	}
                          	
                          	object[key] = prop;
                        } else {
                        	if (!!ignoreUndefined) {
                        		// Ignoring undefined values
                        		object[key] = metal.isUndefined(config[key]) ? object[key] : config[key];
                        	} else {
                        		// Not ignoring undefined values
                        		object[key] = config[key];
                        	}
                        }

                    }
                }
            }
            return object;
        },
        
        /**
         * Secure apply. Acts exactly like {metal.apply} with one change:
         * if config.properties/config.items were not found then
         * it will apply config only of object.properties (used mainly in classes)
         *
         * @method overrideClass
         * @param {Object} object
         * @param {Object} config
         */
        overrideClass: function(object, config) {
        	// Deep copy the titanium/metal properties
        	// from all parent classes 
        	var supr = object.superclass();
        	while(!metal.isNothing(supr)) {
        		this.deepApply(object, {
	        		titaniumProperties: supr.titaniumProperties,
	        		properties: supr.properties
	    		}, true, true);
	    		supr = metal.isNothing(supr.superclass) ? null : supr.superclass();
        	}
        	
			for (var x in config) {
            	if (config.hasOwnProperty(x)) {
            		if (this.isObject(config[x])) {
            			// Object - perform a deep apply
            			object[x] = object[x] || {};
            			this.deepApply(object[x], config[x]);
            		} else if (object.isTitaniumProperty(x)) {
            			// Titanium property - apply on object.property
            			object.properties = object.properties || {};
            			object.properties[x] = config[x];
            		} else {
            			// Metal property - apply straight on the object itself
            			object[x] = config[x];
            		}
            	}
            }
            
        },
        /**
         * Safe Apply
         * Acts the same as apply with only one difference:
         * it doesn't overrides any keys in <object>
         *
         * @method sApply
         * @param {Object} object
         * @param {Object} config
         */
        sApply: function(object, config) {
            if (object && config && typeof config == 'object') {
                for (var key in config) {
                    if (!(key in object)) {
                        object[key] = config[key];
                    }
                };
            }
        },
        /**
         * @property emptyObject
         */
        emptyObject: {},

        /**
         * Copies all fields in "props" to "obj"
         *
         * @param {Object} obj
         * @param {Object...} props
         */
        mixin: function(obj, props) {
            if(!obj) {
                obj = {};
            }
            for(var i=1, l=arguments.length; i<l; i++) {
                mixin(obj, arguments[i]);
            }
            return obj; // Object
        },
        /**
         * create a new object, combining the properties of the passed objects with the last arguments having
         * priority over the first ones
         *
         * @param {Object} obj
         * @param {Object...} props
         */
        combine: function(obj, props) {
            var newObj = {};
            for(var i=0, l=arguments.length; i<l; i++) {
                mixin(newObj, arguments[i]);
            }
            return newObj;
        },
        /**
         * Override functions in a class
         *
         * @method override
         * @param originclass
         *            {Object} The class to override
         * @param overrides
         *            {Object} The overrides
         */
        override: function(origclass, overrides) {
            this.apply(origclass.prototype, overrides);
            return;
        },
        /**
         * @method urlEncode
         * @param {Object} object Creates an object that is
         */
        urlEncode: function(object) {
            var val = "";
            var i = 0;
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    val = val + (i == 0 ? "" : "&") + encodeURI(key) + "=" + encodeURI(object[key]);
                    i++;
                }
            }
            return val;
        },
        /**
         * isArray
         * Checks if the object is an array
         * @method isArray
         * @param {Object} The object to check if it is an array
         */
        isArray: function(obj) {
            // TODO [metal] :: isArray function is not working
            if (typeof obj.pop == 'undefined' || typeof obj.push == 'undefined') {
                return false;
            } else {
                return true;
            }
        },
        /**
         * @method isNumber
         * Checks if n is a number
         * @param {Object} n The object to sjek.
         */
        isNumber: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        /**
         * @method isObject
         * Check if an object is an object *_* fun.
         * @param {Object} v Something to sjek.
         */
        isObject: function(v) {
            return !!v && Object.prototype.toString.call(v) === '[object Object]';
        },
        /**
         * Extend class
         * @method extend
         * @return {Object} The new class
         */
        extend: function() {
            // inline overrides
            var inlineOverrides = function(o) {
                for (var m in o) {
                    if (o.hasOwnProperty(m)) {
                        this[m] = o[m];
                    }
                }
            };
            var objectConstructor = Object.prototype.constructor;

            return function(subclass, superclass, overrides) {
                // First we check if the user passed in just the superClass with
                // overrides
                if (metal.isObject(superclass)) {
                    overrides = superclass;
                    superclass = subclass;
                    subclass = overrides.constructor != objectConstructor ? overrides.constructor
                    : function() {
                        superclass.apply(this, arguments);
                    };
                }

                if (!superclass) {
                    throw "Attempting to extend from a class which has not been loaded on the page.";
                }

                // We create a new temporary class
                var F = function() {
                }, subclassProto, superclassProto = superclass.prototype;
                F.prototype = superclassProto;
                subclassProto = subclass.prototype = new F();
                subclassProto.constructor = subclass;
                subclass.superclass = superclassProto;

                if (superclassProto.constructor == objectConstructor) {
                    superclassProto.constructor = superclass;
                }

                subclass.override = function(overrides) {
                    metal.override(subclass, overrides);
                };
                subclassProto.superclass = subclassProto.supr = (function() {
                    return superclassProto;
                });
                subclassProto.base = superclassProto.constructor;
                subclassProto.override = inlineOverrides;
                subclassProto.proto = subclassProto;

                subclass.override(overrides);
                subclass.extend = function(o) {
                    return metal.extend(subclass, o);
                };
                return subclass;
            };
        }(),
        /**
         * Screen height dimension
         * @property {Integer} height
         */
        height: 480,

        /**
         * Screen width dimension
         * @property {Integer} width
         */
        width: 320,

        /**
         * @method getHeight
         */
        getHeight: function() {
            return this.height;
        },
        /**
         * @method getWidth
         */
        getWidth: function() {
            return this.width;
        },
        /**
         * Get the values needed to align the component to the right
         *
         * @param {Integer} numOfComponents
         * @param {Integer} substract
         * @param [optional] {Integer} optPadding
         */
        getRightAlign: function(numOfComponents, substract, optPadding) {
            var padding = optPadding || 5;
            return this.width - substract - padding - padding * numOfComponents;
        },
        /**
         * Register a global event
         *
         * @method on
         * @param {String} event
         * @param {Function} cb The callback function
         */
        on: function(event, cb) {
            Ti.App.addEventListener(event, cb);
        },
        /**
         * Dismisses a global event
         *
         * @method dismiss
         * @param {String} event
         * @param {Function} cb The callback function
         */
        dismiss: function(event, cb) {
            Ti.App.removeEventListener(event, cb);
        },
        /**
         * Fires a global event
         *
         * @method fire
         * @param {String} event The event name
         * @param {Function} obj The event parameter sent to listener
         */
        fire: function(event, obj) {
            Ti.App.fireEvent(event, obj);
        },
        /**
         * Get the native UI view
         *
         * @method getView
         * @param {Titanium.UI.View or metal.ui.AbstractView} view
         */
        getView: function(view) {
            view = view || {};
            if (view.framework == 'metal') {
                return view.getView();
            } else {
                return view;
            }
        }
    };

}());
// Initialize metal configuration
metal.initConfig();
