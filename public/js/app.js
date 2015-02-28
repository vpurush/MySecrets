define(['angularjs',
        'ng-resource',
        './login/moduleLoader',
        './common/moduleLoader'],
function () {
    var app = angular.module('app', ['login', 'common']);

    app.config(function () {
        console.log("app config");
    });

});