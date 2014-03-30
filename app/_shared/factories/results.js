"use strict";

app.factory('Results', function (PropertySrvc, Query) {
    return {
        properties: [],
        getResults: function (querystring) {
            console.log('in getResults');
            return PropertySrvc.loadProperties(querystring);

        }
    };


});