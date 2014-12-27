define(['angularjs', './login/module'], function () {
    var app = angular.module('app', ['login']);

    app.config(function () {
        console.log("app config");
    });
});