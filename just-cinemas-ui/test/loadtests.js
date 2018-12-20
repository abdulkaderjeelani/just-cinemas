require('babel-polyfill');
require('core-js/fn/object/assign');

// Add support for all files in the test directory
const testsContext = require.context('.', true, /(Test\.js$)|(Helper\.js$)|(Test\.jsx)/);
testsContext.keys().forEach(testsContext);
