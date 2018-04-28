//this file is not transpiled, so use CommonJS and es5

//transpile before our test run
require('babel-register')()

//disabled webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {}
