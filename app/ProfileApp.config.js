"use strict";
angular.module("ProfileApp").config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/profile", 
    {
        template:"<profile></profile>"
    })
    .when("/edit", 
    {
        template:"<edit></edit>"
    })
    .otherwise("/profile", 
    {
        template:"<profile></profile>"
    });
}]);