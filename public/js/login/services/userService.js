define(['login/module'], function (module) {
    module.service('userService', ["$resource", "$window", function ($resource, $window) {
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

        this.GetLoggedInUsername = function () {
            return $window.sessionStorage.getItem("Username");
        }

        this.SaveLoggedInUsername = function (username) {
            $window.sessionStorage.setItem("Username", username);
        }

        this.SaveAuthToken = function (token) {
            $window.sessionStorage.setItem("Auth-Token", token);
        }

        this.GetAuthToken = function () {
            return $window.sessionStorage.getItem("Auth-Token");
        }
    }]);
});