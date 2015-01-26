define(['angularjs',
        'ng-resource',
        './login/moduleLoader'],
function () {
    var app = angular.module('app', ['login']);

    app.config(function () {
        console.log("app config");
    });

});