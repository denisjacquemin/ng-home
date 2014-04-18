"use strict";

angular.module("googlePlaces", [])
    .directive('places-prediction', function () {
        function link(scope, element, attrs) {
            element.onChange(function () {
                alert('focus');
            });

            console.log('hello');
            console.log('Value is :' + scope.ngModel);
        }

        return {
            //scope: {
            //    value: '=', // bind to input value
            //    ngModel: '='
            //},
            link: link
        };
    });