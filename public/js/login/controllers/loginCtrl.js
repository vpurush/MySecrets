define(['login/module'], function (module) {
    module.controller('loginCtrl', ['$scope', 'userService', "$state", '$window', function ($scope, userService, $state, $window) {
        $scope.username = '';
        $scope.password = '';


        $scope.GoToSignUp = function () {
            $state.go("signup");
        }

        $scope.Login = function () {
            userService.Login({ username: $scope.username, password: $scope.password }).then(function (data) {
                console.log("login reponse ", data);
                if (data.Success) {
                    userService.SaveAuthToken(data.Token);
                    userService.SaveLoggedInUsername($scope.usernam);
                }
            });
        }
    }]);
});