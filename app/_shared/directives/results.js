"use strict";

app.directive("results", function () {
    return {
        restrict: "E",
        scope: {
            show: '&',
            results: '='
        },
        template: '<div id="properties">' +
            '<div ng-hide="results.properties.length">No Match Found:: {{results.properties.length}}</div>' +
            '<div class="item" ng-repeat="property in results.properties" >' +
                '<div class="inner">' +
                    '<div class="img-container"><img ng-src="assets/img/properties/{{property.id}}/{{property.images[0]}}"></div>' +
                        '<div class="info" ng-click="show({index:$index})">' +
                            '<span class="title">{{property.title}}</span>' +
                        '</div>' +
                        '<div class="details">' +
                            '<div class="agency">' +
                                '<img ng-src="assets/img/agencies/{{property.agency.id}}/{{property.agency.logo}}" height="30px">' +
                                    '<span>{{property.agency.title}}</span>' +
                                '</div>' +
                                '<span class="price" ng-bind-html="property.price | euro"></span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>'

    }
});