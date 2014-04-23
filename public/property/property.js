/* global app */
/* jslint node: true */ // use strict at top

"use strict";

angular.module('app.property', [
    'ui.router'
]).config(function ($stateProvider) {

    $stateProvider

        .state('property', {
            url: '/p/:urlid', // '/{city:.*}'
            views: {
                'search': {
                    templateUrl: 'search/search.html',

                    controller: function ($scope) {
                        $scope.showSearch = false;
                    }
                },
                'properties': {
                    templateUrl: 'properties/properties.html',
                    controller: [
                        '$scope',
                        function (
                            $scope
                        ) {
                            console.log('instantiate controller in property');
                            $scope.showProperties = false;

                        }]
                },
                'property': {
                    templateUrl: 'property/property.html',
                    controller: function ($scope, $state) {

                        $scope.showProperty = true;
                    }
                },
                'map': {
                    templateUrl: 'map/map.html'
                }
            }
        });

});

