define(['login/module'], function (module) {
    module.service('userService', ["$resource", function ($resource) {
        this.CreateUser = function (obj) {
            var user = $resource('/user');
            user.add(obj, function () {
                console.log("user saved successfully");
            });
        }
    }]);
});