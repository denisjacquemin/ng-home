/* global app */
/* jslint node: true */ // use strict at top

"use strict";

angular.module('app.property', [
    'ui.router'
]).config(function ($stateProvider) {

    $stateProvider

        .state('app.property', {
            url: 'property', // should be :city/:urlid
            views: {
                'property@': {
                    templateUrl: 'property/property.html'
                }
            },
            controller: ['$scope', 'showProperty',

                function (
                    $scope,
                    showProperty
                ) {

                    $scope.showProperty = showProperty;

                }]

        });

});

