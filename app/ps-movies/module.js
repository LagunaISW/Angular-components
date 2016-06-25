(function () {
    "use strict";

    var module = angular.module("psMovies", ["ngComponentRouter", "ngAnimate"]);
    
    module.value("$routerRootComponent", "movieApp");

    module.component("appAbout", {
        template:"Pinche puto"
    });

}());