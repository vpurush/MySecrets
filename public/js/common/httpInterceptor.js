console.log("httpinterceptor outside");
define(["./module"], function (mod) {

    console.log("httpinterceptor inside");
    mod.factory("myhttpInterceptor", ["$window", function ($window) {
        return {
            'request': function (config) {
                console.log("httpInterceptor request", config, arguments);
                var token = $window.sessionStorage.getItem("Auth-Token");
                if(token){
                    config.headers['X-Auth-Token'] = token;
                }
                return config;
            }
        };
    }]);
});