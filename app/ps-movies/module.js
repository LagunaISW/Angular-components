(function () {
    "use strict";

    var module = angular.module("psMovies", ["ngRoute"]);
    
    module.config(function ($routeProvider) {
        $routeProvider
            .when("/list", { template: "<movie-list></movie-list>" })
            .when("/about", { template: "pinche puto" })
            .otherwise({ redirectTo: "/list" });
    })

}());