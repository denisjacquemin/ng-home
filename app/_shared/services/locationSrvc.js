/* global app */
/* jslint node: true */ // use strict at top

"use strict";

app.service("LocationSrvc", function (HttpSrvc) {

    return {
        currentLocationFromIP: function () {
            return HttpSrvc.myGet("http://localhost:5000/API/v1/curloc").then(
                function (data) {
                    return data;
                },
                function (reason) {
                    return "no response";
                }
            );
        }
    };


});