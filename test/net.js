metal.ns('metal.test.net');

/**
 *
 * @class test.net
 */
metal.test.net = (function() {

    return {
        get: function(name) {

            switch(name) {

                case 'success':
                    return {
                        returnValue: 1,
                        message: {
                            name: 'Amir',
                            username: 'amir',
                            certificate: '12345678',
                            mac: 'A12345678'
                        },
                        timestamp: '1234'
                    };
                    break;

                case 'new':
                    return {
                        returnValue: 2,
                        message: {
                            mac: 'A12345678'
                        },
                        timestamp: '1234'
                    };
                    break;

                case 'failure':
                    return {
                        returnValue: 0,
                        message: 'Wrong username or password'
                    };
                    break;

                case 'error':
                    return {
                        returnValue: -1,
                        message: 'Bad request'
                    };
                    break;
            };
        }
    };
})();
// Create alias for less key strokes :)
this.test = this.test || {};
test.net = metal.test.net;
