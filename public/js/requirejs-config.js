require.config({
    baseUrl: '/js',
    paths: {
        'angularjs': '/thirdparty/angularjs/angular',
        'ui-router': '/thirdparty/ui-router/release/angular-ui-router'
    },
    shim: {
        'ui-router': {
            deps: ['angularjs']
        }
    }
});

require(['./app'],function () {
            angular.bootstrap(document, ['app']);
});