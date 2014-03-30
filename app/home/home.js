"use strict";
/* global app */
/* jslint node: true */ // use strict at top

//var appHome = angular.module('app.home', [
//        'ui.router'
//    ]).config(function ($stateProvider) {
//
//        $stateProvider
//
//            .state('home', {
//                url: '/:city',
//                views: {
//                    'search': {
//                        templateUrl: 'search/search.html',
//                        controller: ['$scope', '$location',
//                            function ($scope, $location) {
//                                $scope.doSearch = function (querystring) {
//                                    console.log('doSearch in home ' + querystring);
//                                    $location.path(querystring);
//                                };
//
//                            }]
//                    },
//                    'properties': {
//                        templateUrl: 'properties/properties.html',
//                        resolve: {
//                            showProperties: function () { return true; },
//                            initProperties: function (PropertySrvc, $stateParams) {
//                                console.log('initProperties with ' + $stateParams.city);
//                                return PropertySrvc.loadProperties($stateParams.city);
//                            }
//                        },
//                        controller: [
//                            '$scope',
//                            'Results',
//                            'initProperties',
//                            'showProperties',
//
//                            function (
//                                $scope,
//                                Results,
//                                initProperties,
//                                showProperties
//                                ) {
//
//                                $scope.results = Results;
//                                $scope.results.properties = initProperties;
//                                $scope.showProperties = showProperties;
//
//                            }]
//                    },
//                    'property': {
//                        templateUrl: 'property/property.html',
//                        resolve: {
//                            showProperty: function () { return false; }
//                        }
//                    },
//                    'map': {
//                        templateUrl: 'map/map.html',
//                    }
//                }
//            })

//            .state('search', {
//                url: '/:city',
//                views: {
//                    'search': {
//                        templateUrl: 'search/search.html'
//                    },
//                    'properties': {
//                        templateUrl: 'properties/properties.html',
//                        resolve: {
//                            showProperties: function () { return true; },
//                            initProperties: function (PropertySrvc, $stateParams) {
//                                console.log('Searching for ' + $stateParams.city);
//                                return PropertySrvc.loadProperties($stateParams.city);
//                            }
//                        },
//                        controller: [
//                            '$scope',
//                            'Results',
//                            'initProperties',
//                            'showProperties',
//
//                            function (
//                                $scope,
//                                Results,
//                                initProperties,
//                                showProperties
//                                ) {
//
//                                $scope.results = Results;
//                                $scope.results.properties = initProperties;
//                                $scope.showProperties = showProperties;
//
//                            }]
//                    },
//                    'property': {
//                        templateUrl: 'property/property.html',
//                        resolve: {
//                            showProperty: function () { return false; }
//                        }
//                    },
//                    'map': {
//                        templateUrl: 'map/map.html',
//                    }
//                }
//
//            });

//    });