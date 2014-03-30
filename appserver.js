/*global require */
/*jslint node: true */

'use strict';


var express = require('express'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function () {

    app.set('port', 3000);
    app.set('view engine', 'html');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, '/app')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});



http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port') + __dirname);
});