(function(){
    'use strict';

    var module = angular.module("psMovies");

    module.component("movieDetails", {
        templateUrl: "ps-movies/movie-details.component.html",
        controllerAs: "model",
        //Determina si el usuario puede acceder al componente
        //$canActivate: function ($timeout) {
        //    return $timeout(function () { 
        //        return true;
        //    }, 2000);
        //},
        controller: function () { 
            var model = this;

            model.$routerOnActivate = function (next, previous) {
                model.id = next.params.id;
            };
        }
    });

}());