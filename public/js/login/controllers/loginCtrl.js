define(['login/module'], function (module) {
    module.controller('loginCtrl', ['$scope', function ($scope) {
        $scope.username = '';
        $scope.secret = '';
    }]);
});