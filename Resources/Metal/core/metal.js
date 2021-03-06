/**
 * Metal Framework
 * This framework enables a Titanium developer to write code in a Object Oriented way
 *
 * @class metal
 * @author Amir Lazarovich
 * @version 0.1
 */
this.metal = (function() {
	
	// Define an alias for the global scope
	var global = this;
	
    /**
	 * Registers namespaces
	 * 
	 * @method createNamespace
	 * @param {String} namespace The namespace that needs to be created
	 * @param {String} [additional namespaces] ...
	 */
	function createNamespace() {
		var nsParts = [];
		var part;
		var namespace;
		
		// Go over all given namespaces
		for (var i = 0, iln = arguments.length; i < iln; i++) {
			
			// Get the first namespace
			nsParts = arguments[i].split('.');
			
			// Get the first part of that namespace
			part = nsParts[0];
			
			// Save the base of the namespace in the global scope
			// In case the namespace already exists, create a reference
			namespace = global[part] = global[part] || {};
			for (var j = 1, jln = nsParts.length; j < jln; j++) {
				// Go over all the parts of the namespace
				part = nsParts[j];
				namespace = namespace[part] = namespace[part] || {};
			}	
		}
	}

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
		
		////////////////////////////////////////////////////////////
        // CONSTANTS
        ////////////////////////////////////////////////////////////
		
		/**
         * @const {Integer} PORTRAIT
         */
        PORTRAIT: Ti.UI.PORTRAIT,
        
        /**
         * @const {Integer} UPSIDE_PORTRAIT
         */
        UPSIDE_PORTRAIT: Ti.UI.UPSIDE_PORTRAIT,
        
        /**
         * @const {Integer} LANDSCAPE_LEFT
         */
        LANDSCAPE_LEFT: Ti.UI.LANDSCAPE_LEFT,
        
        /**
         * @const {Integer} LANDSCAPE_RIGHT
         */
        LANDSCAPE_RIGHT: Ti.UI.LANDSCAPE_RIGHT,
		
		/**
		 * UI based constants
		 * 
		 * @property {Object} ui
		 */
		ui: {
			/**
			 * Android constants
			 * 
			 * @property {Object} android
			 */
			android: (function() {
				
				if (!Titanium.UI.Android) {
					return {};
				} else {
					return {
						/**
			 			 * @const {Integer} SOFT_KEYBOARD_DEFAULT_ON_FOCUS
			         	 */
						SOFT_KEYBOARD_DEFAULT_ON_FOCUS: Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, 
						
						/**
			 			 * @const {Integer} SOFT_KEYBOARD_HIDE_ON_FOCUS
			         	 */ 
						SOFT_KEYBOARD_HIDE_ON_FOCUS: Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, 
						
						/**
			 			 * @const {Integer} SOFT_KEYBOARD_SHOW_ON_FOCUS
			         	 */
						SOFT_KEYBOARD_SHOW_ON_FOCUS: Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS
					};
				}
			})(),
			
			/**
			 * iPhone constants
			 * @property {Object} iphone
			 */
			iphone: (function() {
				if (!Titanium.UI.iPhone) {
					return {};
				} else {
					
					return {
						animation: {
							/**
							 * @const {Integer} CURL_DOWN
							 */
							//CURL_DOWN: Titanium.UI.iPhone.AnimationStyle.CURL_DOWN,
							/**
							 * @const {Integer} CURL_UP
							 */
							//CURL_UP: Titanium.UI.iPhone.AnimationStyle.CURL_UP,
							/**
							 * @const {Integer} FLIP_FROM_LEFT
							 */
							//FLIP_FROM_LEFT: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT,
							/**
							 * @const {Integer} FLIP_FROM_RIGHT
							 */
							//FLIP_FROM_RIGHT: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
						},
						
						buttonStyle: {
							/**
					         * @const {Integer} BAR
					         */ 
							//BAR: Titanium.UI.iPhone.SystemButtonStyle.BAR,
							
							/**
					         * @const {Integer} BORDERED
					         */ 
							//BORDERED: Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
							
							/**
					         * @const {Integer} DONE
					         */ 
							//DONE: Titanium.UI.iPhone.SystemButtonStyle.DONE,
							
							/**
					         * @const {Integer} PLAIN
					         */ 
							//PLAIN: Titanium.UI.iPhone.SystemButtonStyle.PLAIN 
						},
						
						indicatorStyle: {
							/**
							 * @const {Integer} BIG
							 */
							BIG: Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,
							/**
							 * @const {Integer} PLAIN
							 */
							PLAIN: Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN,
							/**
							 * @const {Integer} DARK
							 */
							DARK: Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
						}
					};
				}
			})(),
			
			/**
 			 * @const {Integer} INPUT_BORDERSTYLE_ROUNDED
         	 */
			INPUT_BORDERSTYLE_ROUNDED: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			
			/**
 			 * @const {Integer} PICKER_TYPE_DATE_AND_TIME
         	 */
			PICKER_TYPE_DATE_AND_TIME: Ti.UI.PICKER_TYPE_DATE_AND_TIME,
			
			/**
	         * @const {Integer} PICKER_TYPE_PLAIN
	         */
			PICKER_TYPE_PLAIN: Ti.PICKER_TYPE_PLAIN,
			
			/**
	         * @const {Integer} PICKER_TYPE_DATE
	         */
			PICKER_TYPE_DATE: Ti.UI.PICKER_TYPE_DATE, 
			
			/**
	         * @const {Integer} PICKER_TYPE_TIME
	         */
			PICKER_TYPE_TIME: Ti.UI.PICKER_TYPE_TIME,
			
			/**
	         * @const {Integer} PICKER_TYPE_COUNT_DOWN_TIMER
	         */
			PICKER_TYPE_COUNT_DOWN_TIMER: Ti.UI.PICKER_TYPE_COUNT_DOWN_TIMER,
			
			/**
	         * @const {Integer} TEXT_AUTOCAPITALIZATION_NONEL
	         */
			TEXT_AUTOCAPITALIZATION_NONEL: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
			 
			/**
	         * @const {Integer} TEXT_AUTOCAPITALIZATION_WORDS
	         */ 
			TEXT_AUTOCAPITALIZATION_WORDS: Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS,
			
			/**
	         * @const {Integer} TEXT_AUTOCAPITALIZATION_SENTENCES
	         */ 
			TEXT_AUTOCAPITALIZATION_SENTENCES: Ti.UI.TEXT_AUTOCAPITALIZATION_SENTENCES,
			
			/**
	         * @const {Integer} TEXT_AUTOCAPITALIZATION_ALL
	         */ 
			TEXT_AUTOCAPITALIZATION_ALL: Ti.UI.TEXT_AUTOCAPITALIZATION_ALL
		},
		
		////////////////////////////////////////////////////////////
        // PROPERTIES
        ////////////////////////////////////////////////////////////
		
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
         * @property emptyObject
         */
        emptyObject: {},
		
		/**
		 * @property emptyFn
		 */
		emtpyFn: function() {},

		/**
         * Screen height dimension
         * @property {Integer} height
         */
        height: Ti.Platform.displayCaps.platformHeight,

        /**
         * Screen width dimension
         * @property {Integer} width
         */
        width: Ti.Platform.displayCaps.platformWidth,
        
        /**
         * The operating system name
         * @property {String} osname
         */
        osname: Ti.Platform.osname,

        ////////////////////////////////////////////////////////////
        // CHECKERS
        ////////////////////////////////////////////////////////////
        
        /**
         * Check whether the Obj is typeof Type
         * Since the built in function typeof works strangly it is 
         * recommended to use this function instead
         * 
         * @method is
         * @param {Object} obj
         * @param {String} type
         */
        is: function(obj, type) {
		    var objType = this.typeOf(obj);
		    return !this.isNothing(obj) && objType === type;
		},
        
        /**
         * Check if the subject is in fact a boolean variable
         * with the value of True 
         * 
         * @method isTrue
         * @param {Object} subject
         */
        isTrue: function(subject) {
        	return !this.isNothing(subject) && !!subject && subject === true;
        },
        
        /**
         * Check if the subject is in fact a boolean variable
         * with the value of False 
         * 
         * @method isFalse
         * @param {Object} subject
         */
        isFalse: function(subject) {
        	return !this.isNothing(subject) && !!subject === false && subject === false;
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
         * @method isLandscape 
         * @param {Integer} orientation
         */
        isLandscape: function(orientation) {
        	return orientation == this.LANDSCAPE_RIGHT || orientation == this.LANDSCAPE_LEFT;
        },
        
        /**
         * @method isPortrait
         * @param {Integer} orientation
         */
        isPortrait: function(orientation) {
        	return orientation == this.PORTRAIT || orientation == this.UPSIDE_PORTRAIT;
        },
        
        /**
         * @method isString
         * @param {Object} subject
         */
        isString: function(subject) {
        	return this.is(subject, 'String');
        },
        
        /**
         * Checks if subject is an array
         * 
         * @method isArray
         * @param {Object} subject 
         */
        isArray: function(subject) {
            return this.is(subject, 'Array');
        },
        
        /**
         * Checks if subject is a number
         * 
         * @method isNumber
         * @param {Object} subject.
         */
        isNumber: function(subject) {
            return !isNaN(parseFloat(subject)) && isFinite(subject);
        },
        
        /**
         * Check if subject is an object
         * 
         * @method isObject
         * @param {Object} subject 
         */
        isObject: function(subject) {
            return this.is(subject, 'Object');
        },
        
        /**
         * Check if subject is a function
         * 
         * @method isFunction
         * @param {Object} subject
         */
        isFunction: function(subject) {
        	return this.is(subject, 'Function');
        },
        
        /**
		 * @method isMysqlTimestamp
		 */
		isMysqlTimestamp: function(timestamp) {
			var regex = new RegExp('^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) (?:([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?.?[0-9]?$');
			return regex.test(timestamp);
		},
        
        /**
         * @method isHebrew
         * @param {String} string
         */
        isHebrew: function(string) {
        	var hebrewLetters = 'אבגדהוזחטיכלמנסעפצקרשתףךץןם';
        	var regex = new RegExp('^[' + hebrewLetters + ']+$');
        	return regex.test(string);
        },
        
        /**
		 * @method isAndroid
		 */
		isAndroid: function() {
			return Ti.Platform.osname === 'android';
		},
		
		/**
		 * @method isIphone
		 */ 
		isIphone: function() {
			return Ti.Platform.osname === 'iphone';
		},
		
		/**
		 * @method isIpad
		 */ 
		isIpad: function() {
			return Ti.Platform.osname === 'ipad';
		},
        
        ////////////////////////////////////////////////////////////
        // INITIALIZES
        ////////////////////////////////////////////////////////////
        
        /**
         *
         * @method initConfig
         * @param {Object} config
         */
        initConfig: function(config) {
            // If no configuration is given, set default
            if (this.isNothing(config)) {
                this.config = {
                    debugState: 4, // DEBUG
                    cloudebug: false // Set Cloud debugging mode
                };
            } else {
		this.apply(this.config, config);
	    }

            // Update
            this.DEBUG_STATE = this.config.debugState;
            this.CLOUD_DEBUG = this.config.cloudebug;
	    
	    if (metal.debug) {
		metal.debug.state = this.DEBUG_STATE;
		metal.debug.cloudebug = this.CLOUD_DEBUG;
	    }
        },
        
        /**
         * @method initGlobalEvents
         */
        initGlobalEvents: function() {
            var me = this;
            if (Ti.Gesture) {
            	/**
	             * Detect orientation change and update screen dimensions
	             */
	            Ti.Gesture.addEventListener('orientationchange', function(e) {
	                if (me.isPortrait(e.orientation)) {
	                	me.height = Ti.Platform.displayCaps.platformHeight;
	                	me.width = Ti.Platform.displayCaps.platformWidth;
	                } else {
	                	me.width = Ti.Platform.displayCaps.platformHeight;
	                	me.height = Ti.Platform.displayCaps.platformWidth;
	                }
	                
	                ilog('metal', 'Device height: ' + metal.height + ', width: ' + metal.width);
	            });
            }
        },
        
        /**
         * Initialize metal default configuration and events
         * 
         * @method init
         */
        init: function() {
        	// Initialize metal configuration
			metal.initConfig();
			
			// Initialize metal global events
			metal.initGlobalEvents();
        },
        
        ////////////////////////////////////////////////////////////
        // PUBLIC METHODS
        ////////////////////////////////////////////////////////////
        
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
		 * Registers namespaces
		 * 
		 * @method createNamespace
		 * @param {String} namespace The namespace that needs to be created
		 * @param {String} ... [additional namespaces]
		 */
        createNamespace: createNamespace,

        /**
         * Alias for createNameSpace
         *
         * @method ns
         */
        ns: createNamespace,

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
                        properties: supr.properties
                }, true, true);
                supr = metal.isNothing(supr.superclass) ? null : supr.superclass();
            }
            
            var prop;
            
            // Copy all overrides from config
            for (var x in config) {
                if (config.hasOwnProperty(x)) {
                    if (object.isTitaniumProperty(x) && !object.isDiscarded(x)) {
                        // Titanium property - apply on object.property
                        object.properties = object.properties || {};
                        if (!metal.isNothing(object.properties[x]) && 
                                object.properties[x].hasOwnProperty('value')) {
                            // Overriding a complex object
                            prop = {};
                            if (!config[x].hasOwnProperty('value')) {
                                config[x] = { value: config[x] };
                            }
                            this.apply(prop, config[x], object.properties[x]);
                            object.properties[x] = prop;
                        } else {
                            // Simple override
                            object.properties[x] = config[x];	
                        }
                    } else if (this.isObject(config[x]) && config[x].framework != 'metal') {
                        // Simple Object
                        if (this.isNothing(object[x])) {
                            // quicker assignment
                            object[x] = config[x];
                        } else {
                            // perform a deep copy
                            object[x] = object[x] || {};
                            this.deepApply(object[x], config[x]);
                        }
                    } else if (!metal.isNothing(object.events) && (object.events.hasOwnProperty(x) || object.events.hasOwnProperty(x.replace('on', '')))) {
                        // Event
                        prop = {};
                        this.apply(prop, object.events);
                        prop[x.replace('on', '')] = config[x];
                        object.events = prop;
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
         * @method sapply
         * @param {Object} object
         * @param {Object} config
         */
        sapply: function(object, config) {
            if (object && config && typeof config == 'object') {
                for (var key in config) {
                    if (!(key in object)) {
                        object[key] = config[key];
                    }
                };
            }
        },
        
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
         * @method formatProperties
         * @param {Object} prop
         */
        formatProperties: function(prop) {
        	var me = this;
        	var result = {};
        	var p;
        	
        	function isIncluded(subject) {
        		/*
        		 * What is not included:
        		 * 1. undefined/null (also if the subject is an object and its value is one of them)
        		 * 2. discarded property
        		 * 3. not supported by the OS
        		 */ 
				var pass1 = true;
        	 	var pass2 = true;
        		var pass3 = true;
        		 
        		if (me.isObject(subject) && subject.hasOwnProperty) {
        		 	// Object
        		 	pass1 = subject.hasOwnProperty('value') ? !me.isNothing(subject.value) : true;
        		 	pass2 = me.isFalse(subject.discard || false);
        		 	pass3 = !me.isFalse(subject[me.osname]);
        		} else {
        		 	// Not an Object
        		 	pass1 = !me.isNothing(subject);
        		}
				
				return pass1 && pass2 && pass3;       		
        	}
        	
        	// Go over all properties
        	for (var key in prop) {
    			if (isIncluded(prop[key])) {
    				if (prop[key].hasOwnProperty && prop[key].hasOwnProperty('value')) {
    					// Format the property if needed
    					p = prop[key].format ? prop[key].format() : prop[key].value;
    				} else {
    					p = prop[key];
    				}
    				result[key] = p;
    			}
        	}
        	return result;
        },
		
		/**
		 * @method generateId
		 */
		generateId: function() {
			return Math.floor(Math.random() * 1000000000); 
		},
		
		/**
		 * @method mysqlTimestampToDate
		 */
		mysqlTimestampToDate: function(timestamp) {
		    //function parses mysql datetime string and returns javascript Date object
		    //input has to be in this format: 2007-06-05 15:26:02 or 2007-06-05 15:26:02.0 
		    var regex=/^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) (?:([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?.?[0-9]?$/;
		    var parts=timestamp.replace(regex,"$1 $2 $3 $4 $5 $6").split(' ');
		    return new Date(parts[0],parts[1]-1,parts[2],parts[3],parts[4],parts[5]);
	  	},
	  	
		/**
		 * @method formatDate
		 * @param {String} value
		 * @param [optional] {String} option Can be one of the following: 'short', 'medium', 'long'
		 */        
        formatDate: function(value, option) {
        	return String.formatDate(value, option);
        },
        
        /**
         * @method formatTime
         * @param {String} value
         * @param [optional] {String} option Can be one of the following: 'short', 'medium', 'long'
         */
        formatTime: function(value, option) {
        	return String.formatTime(value, option);
        },
        
        /**
         * @method formatDateAndTime
         * @param {String} value
         * @param [optional] {String} option Can be one of the following: 'short', 'medium', 'long'
         */
        formatDateAndTime: function(value, option) {
        	var date = this.formatDate(value, option);
        	var time = this.formatTime(value, option);
        	return date + ' ' + time;
        },
        
        /**
         * Get the true type of an object
         * 
         * @method typeOf
         * @param {Object} obj
         */
     	typeOf: function(obj) {
        	return Object.prototype.toString.call(obj).slice(8, -1);
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
        
        ////////////////////////////////////////////////////////////
        // GETTERS
        ////////////////////////////////////////////////////////////
        
        /**
         * @method getArgs
         * @param {arguments (not an Array!)} arglist
         * @param [optional] {Integer} offset
         */
        getArgs: function(arglist, offset) {
        	var args = [];
			for (var i = offset || 0, iln = arglist.length; i < iln; i++) {
				args.push(arglist[i]);
			}
			
			return args;
        },
        
        /**
         * @method getEmptyFn
         */
        getEmptyFn: function() {
        	return function() {};
        },
        
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
         * @method getDefaultCenter
         */
        getDefaultCenter: function() {
        	return {x: this.width / 2, y: this.height / 2};
        },
        
        /**
         * @method getDefaultSize
         */
        getDefaultSize: function() {
        	return {width: this.width, height: this.height};
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
         * Get native UI view
         *
         * @method getView
         * @param {Titanium.UI.View or metal.ui.AbstractView} view
         */
        getView: function(view) {
        	if (this.isNothing(view) || view.framework != 'metal') {
        		return view;
        	} else {
        		return view.getView();
        	}
        },
        
        /**
         * Get native UI component
         * 
         * @method getComponent
         * @param {object|metal.ui.Component} comp
         */
        getComponent: function(comp) {
        	comp = comp || {};
        	if (comp.framework == 'metal') {
        		return comp.getComponent();
        	} else {
        		return comp;
        	}
        }
    };

}());

// Initialize metal default configuration and events
metal.init();

// Include all scripts
metal.include(

	// Metal Configuration
	'/Metal/config.js',
	
	// Debug
	'/Metal/debug/debug.js',
	
	// Core
	'/Metal/core/control.js',
	
	// Util
	'/Metal/util/Observable.js',
	'/Metal/util/net.js',
	'/Metal/util/location.js',
	'/Metal/util/string.js',
	'/Metal/util/base64.js',
	
	// UI
	'/Metal/ui/Component.js',
	'/Metal/ui/ControlledComponent.js',
	'/Metal/ui/AbstractView.js',
	'/Metal/ui/AbstractWindow.js',
	'/Metal/ui/Window.js',
	'/Metal/ui/TabGroup.js',
	'/Metal/ui/Tab.js',
	'/Metal/ui/View.js',
	'/Metal/ui/TableView.js',
	'/Metal/ui/TableRow.js',
	'/Metal/ui/TableSection.js',
	'/Metal/ui/Label.js',
	'/Metal/ui/Button.js',
	'/Metal/ui/Animation.js',
	'/Metal/ui/Map.js',
 	'/Metal/ui/Marker.js',
 	'/Metal/ui/Picker.js',
 	'/Metal/ui/PickerRow.js',
 	'/Metal/ui/TextField.js',
 	'/Metal/ui/TextArea.js',
 	'/Metal/ui/ImageView.js',
 	'/Metal/ui/OptionDialog.js',
	'/Metal/ui/ButtonBar.js',
	'/Metal/ui/Toolbar.js',
	'/Metal/ui/ProgressBar.js',
	'/Metal/ui/CoverFlowView.js',
	'/Metal/ui/ScrollView.js',
	'/Metal/ui/ScrollableView.js',
	'/Metal/ui/WebView.js',
	
	// Media
	'/Metal/media/PhotoGallery.js',
	'/Metal/media/Camera.js',
	'/Metal/media/VideoPlayer.js',
	
	// Widgets
	'/Metal/widget/ImageButton.js',
	'/Metal/widget/SearchBar.js',
	'/Metal/widget/ActivityIndicator.js',
	'/Metal/widget/Message.js',
	
	// UX
	'/Metal/ux/LoadingIndicator.js',
	
	// Model
	'/Metal/model/GeoLocation.js',
	
	// Adapters
	'/Metal/adapter/android/AndroidAdapter.js',
	
	// Tests
	'/Metal/test/net.js'

);

// Notify device dimensions
ilog('metal', 'Device height: ' + metal.height + ', width: ' + metal.width);

