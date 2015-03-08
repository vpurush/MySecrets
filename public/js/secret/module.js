define(['angularjs', 'ui-router'], function () {
    var mod = angular.module("secret", ['ui.router', 'ngResource']);

    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('secret', {
            url: '/secret',
            templateUrl: '/html/secret/main.html',
            controller: 'secretCtrl'
        });
    }]);

    return mod;
});