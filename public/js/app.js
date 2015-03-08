define(['angularjs',
        'ng-resource',
        'underscore',
        './login/moduleLoader',
        './common/moduleLoader',
        'secret/moduleLoader'],
function () {
    var app = angular.module('app', ['login', 'common', 'secret']);

    app.config(function () {
        console.log("app config");
    });

    //require(['secret/moduleLoader'], function () {
    //    angular.module("secret");
    //    console.log("secret module loaded successfully");
    //});

});