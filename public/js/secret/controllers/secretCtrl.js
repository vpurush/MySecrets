define(['secret/module', 'underscore'], function (module, _) {
    module.controller('secretCtrl', ['$scope', 'secretService', '$state', function ($scope, secretService, $state) {
        $scope.KeyValueList = [];
        $scope.RandomText = "";

        secretService.GetSecretId().then(function () {
            secretService.GetKeyValues().then(function (data) {
                $scope.KeyValueList = data;
                $scope.AddNewRow();
            })
            secretService.GetRandomText().then(function (data) {
                $scope.RandomText = data;

                $scope.$watch("RandomText", _.debounce(function () {
                    console.log("randomtext", $scope.RandomText);
                    secretService.SaveRandomText($scope.RandomText);
                }, 500));
            })
        });

        $scope.RowClick = function (obj) {
            if (obj.NewRow) {
                $scope.AddNewRow();
            }
        }

        $scope.SaveKeyValues = _.debounce(function () {
            console.log("KeyValueList", $scope.KeyValueList);
            var data = _.chain($scope.KeyValueList)
                        .where({ NewRow: false })
                        .map(function(obj){
                            return _.pick(obj, 'Key', 'Value');
                        })
                        .value();
            secretService.SaveKeyValues(data);
        }, 2000);

        $scope.AddNewRow = function (obj) {
            _.each($scope.KeyValueList, function (kv) {
                kv.NewRow = false;
            });
            $scope.KeyValueList.push({ Key: '', Value: '', NewRow: true });
        }
    }]);
});