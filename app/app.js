"use strict";

var app = angular.module('app', [
    'ui.router',
    'ngSanitize',
    //'google-maps',
    'ngAutocomplete',
    'app.search',
    'app.property',
    'app.properties'
]);

app.run(
    [            '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
);

// define routes
app.config([
    '$urlRouterProvider',

    function ($urlRouterProvider) {

        $urlRouterProvider.otherwise('/');



//        $routeProvider
//            .when('/:city', {
//                templateUrl: 'search/search.html.bak',
//                controller: 'SearchCtrl',
//                resolve: {
//                    initProperties: function (PropertySrvc, $route) {
//                        console.log('initProperties');
//                        return PropertySrvc.loadProperties($route.current.params.city);
//                    }
//                }
//            })
//            .when('/:city/:urlid', {
//                templateUrl: 'search/search.html.bak',
//                controller: 'SearchCtrl',
//                resolve: {
//                    initProperties: function (PropertySrvc, $route) {
//                        console.log('initProperties');
//                        return PropertySrvc.loadProperty($route.current.params.city);
//                    }
//                }
//            })
//            .when('/', {
//                templateUrl: 'search/search.html.bak',
//                controller: 'SearchCtrl',
//                resolve: {
//                    initProperties: function (PropertySrvc) {
//                        console.log('initProperties');
//                        return PropertySrvc.loadProperties('hargimont');
//                    }
//                }
//
//            });
    }]);


app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(false);
}]);