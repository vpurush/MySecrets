define(['login/module'], function (module) {
    module.service('userService', ["$resource", function ($resource) {
        this.CreateUser = function (obj) {
            var user = $resource('/user');
            user.save(obj, function () {
                console.log("user saved successfully");
            });
        }

        this.Login = function (obj) {
            var login = $resource('/login', null, {
                validate: {
                    method: 'POST',
                    responseType: 'json',
                    cache: false
                }
            });
            return login.validate(obj).$promise;
        }
    }]);
});