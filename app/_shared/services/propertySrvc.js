/* global app */
/* jslint node: true */ // use strict at top

"use strict";

app.service("PropertySrvc", function (HttpSrvc) {

    return {
        loadProperties: function (queryString) {
            return HttpSrvc.myJSONP("http://localhost:4000/API/v1/" + queryString + '?callback=JSON_CALLBACK').then(
                function (data) {
                    return data;
                },
                function (reason) {
                    return [];
                }
            );
        }
    };


});