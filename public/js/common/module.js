define(['angularjs'], function () {
    var mod = angular.module("common", ['ng']);
    mod.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('myhttpInterceptor');
    }]);
    return mod;
});