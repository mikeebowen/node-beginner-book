'use strict';
// require in modules
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');
var handle = {};
// assign different handlers to different pathnames
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;
// use the server's start function with the router.route function as the first argument and the handle object as the second argument
server.start(router.route, handle);
