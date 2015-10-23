'use strict';

/**
 *
 * The structure of this node server is the following:
 * 1.) server-controller starts an express server which defines the static
 *     content, port number and sets up handle bars to use the views and layouts
 * 2.) URLs are then routed by defining a url and calling addEndpoint(). On
 *     requests to a matching url the onRequest() method is called in the
 *     passed in controller (i.e. StaticPageController)
 *
 */

var serverController = require('./controllers/server-controller');
var StaticPageController = require('./controllers/static-page-controller');
var AppShellController = require('./controllers/app-shell-controller');

serverController.addEndpoint('/app-shell', new AppShellController());
serverController.addEndpoint('/*', new StaticPageController());
