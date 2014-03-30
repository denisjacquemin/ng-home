"use strict";

app.directive('search', function () {
    return {
        restrict: 'E',
        scope: {
            action: '&',
            location: '=',
            option: '=?'
        },
        template: '<form>' +
            '<div class="search-container" ng-submit="action({location:location})">' +
            '<input type="search" placeholder="Where?" ng-model="location" ng-model="location" ng-autocomplete options="options" details="details">' +
            '</div>' +
            '<input type="submit" value="Chercher">' +
            '</form>'

    }
});