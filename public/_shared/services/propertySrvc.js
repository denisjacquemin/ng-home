/* global app */
/* jslint node: true */ // use strict at top

"use strict";

app.service("PropertySrvc", function (HttpSrvc) {

    return {
        loadProperties: function (queryString) {
            return HttpSrvc.myGet("http://localhost:5000/API/v1/" + queryString).then(
                function (data) {
                    return data;
                },
                function (reason) {
                    return [];
                }
            );
        },
        getByGeo: function (lon, lat) {
            return HttpSrvc.myGet("http://localhost:5000/API/v1/geo?lon=" + lon + '&lat=' + lat);
        }

    };


});