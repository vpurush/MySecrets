require.config({
    baseUrl: '/js',
    paths: {
        'angularjs': '/thirdparty/angularjs/angular',
        'ui-router': '/thirdparty/ui-router/release/angular-ui-router',
        'crypto': '/thirdparty/cryptojs/cryptojs',
        'ng-resource': '/thirdparty/ng-resource/dist/ng-resource'
    },
    shim: {
        'ui-router': {
            deps: ['angularjs']
        },
        'ng-resource': {
            deps: ['angularjs']
        }
    }
});

require(['./app'], function () {
    angular.bootstrap(document, ['app']);
});