(function(){
    'use strict';

    var module = angular.module("psMovies");

    module.component("movieDetails", {
        templateUrl: "ps-movies/movie-details.component.html",
        controllerAs: "model",
        $routeConfig: [
            { path: "/overview", component: "movieOverview", name: "Overview" },
            { path: "/cast", component: "movieCast", name: "Cast" },
            { path: "/director", component: "movieDirector", name: "Director" }
        ],
        controller: function () { 
            var model = this;

            model.$routerOnActivate = function (next, previous) {
                model.id = next.params.id;
            };
        }
    });

    module.component("movieOverview", {
        template: "Este es el overview"
    });
    module.component("movieCast", {
        template: "Este es el cast"
    });
    module.component("movieDirector", {
        template: "Este es el director"
    });

}());