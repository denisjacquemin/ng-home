/* global app */
/* jslint node: true */ // use strict at top

"use strict";

angular.module('app.search', [
    'ui.router'
]).config(function ($stateProvider) {


    $stateProvider

        .state('home', {
            url: '/',
            views: {
                'search': {
                    templateUrl: 'search/search.html',
                    resolve: {
                        querylocation: function ($stateParams) {
                            return $stateParams.city;
                        }
                    },
                    controller: ['$scope', '$state', '$location', 'Query', 'querylocation',
                        function ($scope, $state, $location, Query, querylocation) {
                            $scope.query = Query;
                            $scope.query.location = querylocation;

                            $scope.doSearch = function (querystring) {
                                console.log('doSearch in home ' + querystring);
                                //$location.path(querystring);
                                $state.go('search', {city: $scope.query.location});
                            };
                        }]
                },
                'properties': {
                    templateUrl: 'properties/properties.html',
                    resolve: {
                        showProperties: function () { return true; },
                        initProperties: function (PropertySrvc, $stateParams) {
                            console.log('initProperties with ' + 'nothing');
                            return [];
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
                    resolve: {
                        showProperty: function () { return false; }
                    }
                },
                'map': {
                    templateUrl: 'map/map.html'
                }
            }
        })


        .state('search', {
            url: '/:city',
            views: {
                'search': {
                    templateUrl: 'search/search.html',
                    resolve: {
                        querylocation: function ($stateParams) {
                            return $stateParams.city;
                        }
                    },
                    controller: ['$scope', '$state', '$location', 'Query', 'querylocation',
                        function ($scope, $state, $location, Query, querylocation) {
                            $scope.query = Query;
                            $scope.query.location = querylocation;

                            $scope.doSearch = function (querystring) {
                                console.log('doSearch in home ' + querystring);
                                //$location.path(querystring);
                                $state.go('search', {city: $scope.query.location});
                            };
                        }]
                },
                'properties': {
                    templateUrl: 'properties/properties.html',
                    resolve: {
                        showProperties: function () { return true; },
                        initProperties: function (PropertySrvc, $stateParams) {
                            console.log('initProperties with ' + $stateParams.city);
                            return PropertySrvc.loadProperties($stateParams.city);
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
                    resolve: {
                        showProperty: function () { return false; }
                    }
                },
                'map': {
                    templateUrl: 'map/map.html'
                }
            }
        })

});

