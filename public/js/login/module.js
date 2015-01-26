define(['angularjs', 'ui-router'], function () {
    var mod = angular.module("login", ['ui.router', 'ngResource']);

    mod.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: '/html/login/login.html',
            controller: 'loginCtrl'
        });

        $stateProvider.state('signup', {
            url: '/signup',
            templateUrl: '/html/login/signup.html',
            controller: 'signupCtrl'
        });

        $urlRouterProvider.otherwise('/signup');
    }]);

    return mod;
});