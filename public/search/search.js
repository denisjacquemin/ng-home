/* global app */
/* jslint node: true */ // use strict at top

"use strict";

angular.module('app.search', [
    'ui.router'
]).config(function ($stateProvider, $urlMatcherFactoryProvider) {

    var urlMatcher = $urlMatcherFactoryProvider.compile("/.*");

    $stateProvider

        .state('search', {
            url: '/:city', // '/{city:.*}'
            views: {
                'search': {
                    templateUrl: 'search/search.html',
                    resolve: {
                        location: function (LocationSrvc, $stateParams) {
                            return $stateParams.city || LocationSrvc.currentLocationFromIP();
                        }
                    },
                    controller: ['$scope', '$state', 'location',
                        function ($scope, $state, location) {
                            $scope.form = {
                                location: location,
                            };

                            $scope.doSearch = function (location, lon, lat) {
                                console.log('doSearch in home ' + location + ', ' + lon + ', ' + lat);


                                $state.transitionTo('search', {city: location});
                            };
                        }]
                },
                'properties': {
                    templateUrl: 'properties/properties.html',
                    resolve: {
                        showProperties: function () { return true; },

                        properties: function ($stateParams, PropertySrvc, LocationSrvc) {
                            return LocationSrvc.locateCity($stateParams.city).then(
                                function (lonlat) {
                                    return PropertySrvc.getByGeo(lonlat.lng, lonlat.lat).then(
                                        function (data) {
                                            console.log('found ' + data.length + 'results');
                                            return data;
                                        },
                                        function (reason) {
                                            return [];
                                        }
                                    );
                                },
                                function (reason) {
                                    return "no response";
                                }
                            );

                        }
                    },
                    controller: [
                        '$scope',
                        'Results',
                        'properties',
                        'showProperties',

                        function (
                            $scope,
                            Results,
                            properties,
                            showProperties
                        ) {
                            console.log('instantiate controller');
                            $scope.results = Results;
                            $scope.results.properties = properties;
                            $scope.showProperties = showProperties;

                        }]
                },
                'property': {
                    templateUrl: 'property/property.html',
                    controller: function ($scope, $state) {

                        $scope.showProperty = false;
                    }
                },
                'map': {
                    templateUrl: 'map/map.html'
                }
            }
        });


//        .state('root.search', {
//            url: '/:city',
//
//            views: {
//                'search': {
//                    templateUrl: 'search/search.html',
//
//                    controller: ['$scope', '$state', '$location', 'Query', 'querylocation',
//
//                        function ($scope, $state, $stateParams) {
//                            console.log('In root.search.views.search.controller');
//                            $scope.rootSearch = function () {};
//
//                            $scope.doSearch = function (location, lon, lat) {
//                                console.log('doSearch in home ' + location + ', ' + lon + ', ' + lat);
//                                $state.current.data.location = location;
//                                $state.current.data.lon = lon;
//                                $state.current.data.lat = lat;
//                                $state.go('root.search', {city: $state.current.data.location});
//                            };
//                        }]
//                },
//                'properties': {
//                    template: "<p>properties</p>"//'properties/properties.html',
////                    resolve: {
////                        showProperties: function () { return true; },
////                        initProperties: function (PropertySrvc, Query) {
////                            console.log('initProperties with ' + Query.location);
////                            // get lon and lat of city
////                            // then call PropertySrvc.getByGeo function
////
////                            return PropertySrvc.loadProperties(Query.location);
////                        }
////                    },
////                    controller: [
////                        '$scope',
////                        'Results',
////                        'initProperties',
////                        'showProperties',
////
////                        function (
////                            $scope,
////                            Results,
////                            initProperties,
////                            showProperties
////                        ) {
////
////                            $scope.results = Results;
////                            $scope.results.properties = initProperties;
////                            $scope.showProperties = showProperties;
////
////                        }]
//                },
//                'property': {
//                    templateUrl: 'property/property.html',
//                    controller: function ($scope) {
//
//                        $scope.showProperty = false;
//                    }
//                },
//                'map': {
//                    templateUrl: 'map/map.html'
//                }
//            }
//        });

});

