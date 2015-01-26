define(['login/module'], function (module) {
    console.log("signup cntrl defined");
    module.controller('signupCtrl', ['$scope', 'userService', function ($scope, userService) {
        $scope.username = '';
        $scope.password = '';

        $scope.SignUp = function () {
            userService.CreateUser({ username: $scope.username, password: $scope.password });
        }

        $scope.GoToLogin = function () {
            alert('hi');
        }
    }]);
});