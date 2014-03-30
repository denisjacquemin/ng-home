/* global app */

"use strict";

app.service("HttpSrvc", function ($http, $q, $sce) {

    return {
        myGet: function(url, config) {
            var deferred = $q.defer();
            $http.get(url, config).then(
                function successCallBack(result) {
                    deferred.resolve(result.data);
                },
                function errorCallBack(reason) {
                    deferred.reject(reason);
                }
            );
            return deferred.promise;
        },
        myPut: function (url, payload, config) {
            var deferred = $q.defer();
            $http.put(url, payload, config).then(
                function (result) {
                    deferred.resolve(result.data);
                },
                function (bad) {
                    deferred.reject(bad);
                }
            );
            return deferred.promise;
        },
        myDelete: function (url, config) {
            var deferred = $q.defer();
            $http.delete(url, config).then(
                function (result) {
                    deferred.resolve(result.data);
                },
                function (reason) {
                    deferred.reject(reason);
                }
            );
            return deferred.promise;
        },
        myPost: function (url, payload, config) {
            var deferred = $q.defer();
            $http.post(url, payload, config).then(
                function (good) {
                    deferred.resolve(good.data);
                },
                function (bad) {
                    deferred.reject(bad);
                }
            );
            return deferred.promise;
        },
        myJSONP: function(url, config) {
            var deferred = $q.defer();
            $http.jsonp(url, config).then(
                function successCallBack(result) {
                    deferred.resolve(result.data);
                },
                function errorCallBack(reason) {
                    deferred.reject(reason);
                }
            );
            return deferred.promise;
        }

    };

});