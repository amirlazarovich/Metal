// Simple debug output helper
function debug(message) {
    Ti.API.info(message);
}

/**
 *
 * @param thisControl The control you wish to dump
 * @param goDeep boolean Do you want deep introspection
 * @param incFuncs boolean Do you want to include functions in the output when going deep
 * @return null
 */
function dumpObj2(thisControl, goDeep, incFuncs, msg) {
    msg = msg || '';

    // Some sanity checks
    if (thisControl == null) {
        //debug("Can't do much with null");
        return;
    }

    // Start simple
    var objectName = typeof thisControl;
    //debug("["+objectName+"] thinks it's a "+thisControl.toString());
    //debug("The constructor of ["+objectName+"] thinks it's a/an "+typeof thisControl.constructor)

    try {
        var dynamicProp = "Dynamic Properties: "+JSON.stringify(thisControl.getDynamicProperties());
        msg += dynamicProp;
    } catch (e) {
        //debug("No Dynamic Properties");
    }

    if (goDeep) {
        // thisControl is the item you wish to debug
        for(p in thisControl) {
            // Define a default type
            var typeName = "property";
            try {
                // Grab a handle to allow us to check
                var typeHandle = thisControl[p];
                if (typeof typeHandle == "function") {
                    // We have a function
                    if (!incFuncs) {
                        // Ignore it
                        continue;
                    }
                    typeName = typeHandle;

                    // Functions
                    msg += "\n" + typeof typeHandle + ": " + p + " = " + typeName + "\n";
                }
            } catch (e) {
                // Oops - we have a problem - not an issue
                Ti.API.info("Exception with "+p);
            }

            switch (typeName) {
                case "property":
                    try {
                        if ("object" == typeof thisControl[p]) {
                            var obj = thisControl[p];
                            for (var prop in obj) {
                                var propType = typeof obj[prop];
                                switch (propType) {
                                    case "function":

                                        break;

                                    default:

                                        break;

                                }
                            }

                            dumpObj2(thisControl[p], false, false, msg);
                        } else {
                            msg += '\n' + typeName + ': {' + typeof thisControl[p] + '} ' + p + ' = ' + thisControl[p];
                        }
                    } catch (e) {
                        // TODO: handle exception
                    }
                    break;

                case "function":
                    // Nothing
                    break;

                case "object":
                    // Recursive for objects
                    try {
                        debug('now here');
                        dumpObj2(thisControl[p], false, false, msg);
                    } catch (e) {
                        // Do nothing
                    }
                    break;

                default:
                    //debug('default: ' + typeName + ', ' + typeof thisControl[p] + ', ' + p);
                    // Nothing
                    break;
            }

            //debug('outside: ' + typeName + ', ' + typeof thisControl[p] + ', ' + p);
        }
    }

    return msg;
}

function dumpObj2(thisControl, gap) {
    var msg = '\n';
    gap = gap || '';
    for (var prop in thisControl) {
        var value = thisControl[prop];
        switch (typeof value) {
            case "function":
                //msg +=  typeof value + ": " + prop + " = " + value + "\n";
                break;

            case "object":
                for (var prop2 in value) {
                    var value2 = value[prop2];
                    if (prop2 == "superclass") {
                        var isGap = gap != '';
                        msg += gap + "[Superclass]:: [" + dumpObj2(value2(), (isGap? '+' + gap : '+   ')) + ']\n';
                        continue;
                    }

                    switch (typeof value2) {
                        case "function":
                            msg += gap + '[Function] ' + prop2 + ' = ' + value2 + '\n';
                            break;
                        case 'object':
                            msg += gap + '[Property] ' + prop + ': {' + typeof value2 + '} ' + prop2 + ' = ' + value2 + '\n';
                            break;
                        default:
                            msg += gap + '[Inside-Property] ' + prop + ': {' + typeof value2 + '} ' + prop2 + ' = ' + value2 + '\n';
                            break;
                    }
                }
                break;

            default:
                //msg += 'Property' + ': {' + typeof value + '} ' + prop + ' = ' + value + '\n';
                break;

        }
    }

    return msg;
}