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
            data: {
                lon: '0',
                lat: '0'
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
                                lon: '50.19905',
                                lat: '5.31675'
                            };

                            $scope.doSearch = function (location, lon, lat) {
                                console.log('doSearch in home ' + location + ', ' + lon + ', ' + lat);
                                $state.current.data.lon = lon;
                                $state.current.data.lat = lat;
                                $state.transitionTo('search', {city: location});
                            };
                        }]
                },
                'properties': {
                    templateUrl: 'properties/properties.html',
                    resolve: {
                        showProperties: function () { return true; },

                        properties: function ($state, $stateParams, PropertySrvc, LocationSrvc) {

                            var lonlat = {};
                            if ($state.current.data !== undefined
                                    && $state.current.data.lon !== undefined
                                    && $state.current.data.lat !== undefined) {

                                lonlat = {
                                    lon: $state.current.data.lon,
                                    lat: $state.current.data.lat
                                };
                            }

                            return PropertySrvc.getByGeo(lonlat.lon, lonlat.lat).then(
                                function (data) {
                                    console.log('found ' + data.length + 'results');
                                    return data;
                                },
                                function (reason) {
                                    return [];
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
});

