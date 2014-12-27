define(['angularjs', 'ui-router'], function () {
    var mod = angular.module("login", ['ui.router']);

    mod.config(function ($stateProvider) {

        $stateProvider.state('login', {
            url: '/login',
            templateUrl: '/html/login/login.html',
            onEnter: function () {
                console.log("on enter");
                require(['login/controllers/loginCtrl']);
            }
        });
    });

    return mod;
});