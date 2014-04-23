"use strict";
/* global app */
/* jslint node: true */ // use strict at top

var appProperties = angular.module('app.properties', [
    'ui.router'
]).config(function ($stateProvider) {

    $stateProvider

        .state('properties', {
           abstract: true,
           url: 'properties',
           templateUrl: 'properties/properties.html',
           
        });



});