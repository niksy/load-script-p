const testsContext = require.context('.', true, /^((?!(\.webpack|fixtures\/)).)*\.js$/);
require('lie/polyfill');
testsContext.keys().forEach(testsContext);
