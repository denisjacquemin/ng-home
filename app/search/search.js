/* global app */
/* jslint node: true */ // use strict at top

"use strict";

angular.module('app.search', [
    'ui.router'
]).config(function ($stateProvider, $urlMatcherFactoryProvider) {

    //var urlMatcher = $urlMatcherFactory.compile("/");
    var urlMatcher = $urlMatcherFactoryProvider.compile("/.*");

    $stateProvider

        .state('root', {
            url: '/{city:.*}',
            data:  {

                lon: 50.8333,
                lat: 4
            },
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
                                lon: $state.current.data.lon,
                                lat: $state.current.data.lat
                            };

                            $scope.doSearch = function (location, lon, lat) {
                                console.log('doSearch in home ' + location + ', ' + lon + ', ' + lat);
                                $state.current.data.location = location;
                                $state.current.data.lon = lon;
                                $state.current.data.lat = lat;
                                $state.transitionTo('root.search', {city: $state.current.data.location});
                            };
                        }]
                },
                'properties': {
                    templateUrl: 'properties/properties.html',
                    resolve: {
                        showProperties: function () { return true; },
                        initProperties: function (PropertySrvc) {
                            console.log('initProperties with ' + this.data.location);
                            return PropertySrvc.getByGeo(this.data.lon, this.data.lat);
                        }
                    },
                    controller: [
                        '$scope',
                        'Results',
                        'initProperties',
                        'showProperties',

                        function (
                            $scope,
                            Results,
                            initProperties,
                            showProperties
                            ) {

                            $scope.results = Results;
                            $scope.results.properties = initProperties;
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

