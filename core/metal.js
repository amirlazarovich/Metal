Ti.include('/Metal/config.js');

/**
 *
 */
(function() {
  
  this.metal = this.metal || {};
  
  // Check if global configuration is set
  // If not, set default values
  if (typeof metal.config == "undefined") {
    metal.config = {
      serverDomain : 'myDomain.com',
      serverPath: '/myServerPath',
      debugState: 3, // DEBUG
      cloudebug: false // Set Cloud debugging mode
    };
  }
  
  /**
   * Set debug state threshold level:
   * 0 - NONE
   * 1 - ERROR
   * 2 - INFO
   * 3 - DEBUG
   * 
   * @property {Integer} DEBUG_STATE
   */
  metal.DEBUG_STATE = metal.config.debugState;
  
  /**
   * Set cloud debugging state
   * 
   * @property {Boolean} CLOUD_DEBUG
   */
  metal.CLOUD_DEBUG = metal.config.cloudebug;
  
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
   metal.createNameSpace = function() {
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
      // TODO [metal::createNameSpace] We need to make this generic and not only work for metal namespace!
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
  
  // Define an alias 
  metal.ns = metal.createNameSpace;
  
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
  metal.apply = function(object, config, defaults) {
    // no "this" reference for friendly out of scope calls
    if (defaults) {
      metal.apply(object, defaults);
    }
    if (object && config && typeof config == 'object') {
      for ( var key in config) {
        object[key] = config[key];
      }
    }
    return object;
  };
  
  /**
   * Secure apply. Acts exactly like {metal.apply} with one change:
   * if config.properties/config.items were not found then 
   * it will apply config only of object.properties (used mainly in classes)
   * 
   * @method overrideClass
   * @param {Object} object
   * @param {Object} config
   */
  metal.overrideClass = function(object, config) {
    config = config || {};
    if (config.properties != undefined ||
        config.items != undefined) {
      metal.apply(object, config);
    } else {
      metal.apply(object.properties, config);
    }
  };
  
  /**
   * Safe Apply
   * Acts the same as apply with only one difference: 
   * it doesn't overrides any keys in <object> 
   * 
   * @method sApply
   * @param {Object} object
   * @param {Object} config
   */
  metal.sApply = function(object, config) {
    if (object && config && typeof config == 'object') {
      for (var key in config) {
        if (!(key in object)) {
          object[key] = config[key];
        }
      }
    }
  }
  
  // Empty object
  var empty = {};
  
  /**
   * Extend an object with the properties from another 
   * (thanks Dojo - http://docs.dojocampus.org/dojo/mixin)
   * 
   * @param {Object} target
   * @param {Object} source
   */
  function mixin(target, source){
    var name, s, i;
    for(name in source){
      if (source.hasOwnProperty(name)) {
        s = source[name];
        if(!(name in target) || (target[name] !== s && (!(name in empty) || empty[name] !== s))){
          target[name] = s;
        }
      }
    }
    return target; // Object
  };
  
  /**
   * Copies all fields in "props" to "obj"
   * 
   * @param {Object} obj
   * @param {Object...} props
   */
  metal.mixin = function(obj, props){
    if(!obj){ obj = {}; }
    for(var i=1, l=arguments.length; i<l; i++){
      mixin(obj, arguments[i]);
    }
    return obj; // Object
  };
  
  /**
   * create a new object, combining the properties of the passed objects with the last arguments having
   * priority over the first ones
   *
   * @param {Object} obj
   * @param {Object...} props
   */
  metal.combine = function(obj, props) {
    var newObj = {};
    for(var i=0, l=arguments.length; i<l; i++){
      mixin(newObj, arguments[i]);
    }
    return newObj;
  };
  
  /**
   * Override functions in a class
   * 
   * @method override
   * @param originclass
   *            {Object} The class to override
   * @param overrides
   *            {Object} The overrides
   */
  metal.override = function(origclass, overrides) {
    metal.apply(origclass.prototype, overrides);
    return;
  };
  
  /**
   * @method urlEncode
   * @param {Object} object Creates an object that is
   */
  metal.urlEncode = function(object) {
    var val = "";
    var i = 0;
    for ( var key in object) {
      val = val + (i == 0 ? "" : "&") + encodeURI(key) + "="
          + encodeURI(object[key]);
      i++;
    }
    return val;
  };
  
  /**
   * isArray
   * Checks if the object is an array
   * @method isArray
   * @param {Object} The object to check if it is an array
   */
  metal.isArray = function isArray(obj) {
    // TODO [metal] :: isArray function is not working
    if (typeof obj.pop == 'undefined' || typeof obj.push == 'undefined')
      return false;
    else
      return true;
  };

  /**
   * @method isNumber
   * Checks if n is a number
   * @param {Object} n The object to sjek.
   */
  metal.isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  /**
   * @method isObject 
   * Check if an object is an object *_* fun.
   * @param {Object} v Something to sjek.
   */
  metal.isObject = function(v) {
    return !!v && Object.prototype.toString.call(v) === '[object Object]';
  };
  
  /**
   * Extend class
   * @method extend
   * @return {Object} The new class
   */
  metal.extend = function() {
    // inline overrides
    var inlineOverrides = function(o) {
      for ( var m in o) {
        if (!o.hasOwnProperty(m)) {
          continue;
        }
        this[m] = o[m];
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
  }();
  
  
  /**
   * Screen dimensions 
   */
  metal.height = Ti.Platform.displayCaps.platformHeight;
  metal.width = Ti.Platform.displayCaps.platformWidth;
  
  Ti.API.info('[metal] Device height: ' + metal.height + ', width: ' + metal.width);
  
  /**
   * Get the values needed to align the component to the right
   * 
   * @param {Integer} numOfComponents
   * @param {Integer} substract 
   * @param [optional] {Integer} optPadding
   */
  metal.getRightAlign = function(numOfComponents, substract, optPadding) {
    var padding = optPadding || 5;
    return metal.width - substract - padding - padding * numOfComponents;
  };
  
  /**
   * Register a global event
   * 
   * @method on
   * @param {String} event
   * @param {Function} cb The callback function
   */
  metal.on = function(event, cb) {
    Ti.App.addEventListener(event, cb);
  };
  
  /**
   * Dismisses a global event
   * 
   * @method dismiss
   * @param {String} event
   * @param {Function} cb The callback function
   */
  metal.dismiss = function(event, cb) {
    Ti.App.removeEventListener(event, cb);
  };
  
  /**
   * Fires a global event
   * 
   * @method fire
   * @param {String} event The event name
   * @param {Function} obj The event parameter sent to listener
   */
  metal.fire = function(event, obj) {
    Ti.App.fireEvent(event, obj);
  };
  
})();


Ti.include(
  
  // Debug
  '/Metal/debug/debug.js',
  
  // Core
  //'/Metal/core/auth.js',
  '/Metal/core/control.js',
  
  // Util
  '/Metal/util/net.js',
  '/Metal/util/location.js',
  
  // UI
  '/Metal/ui/AbstractMetalView.js',
  '/Metal/ui/Window.js',
  '/Metal/ui/TabGroup.js',
  '/Metal/ui/Tab.js',
  '/Metal/ui/View.js',
  '/Metal/ui/TableView.js',
  '/Metal/ui/TableRow.js',
  '/Metal/ui/TableSection.js',
  
  // Custom UI
  //'/Metal/customUI/simpleWindow.js',
  //'/Metal/customUI/login.js',
  
  // Tests
  '/Metal/test/net.js'
  
  
);
