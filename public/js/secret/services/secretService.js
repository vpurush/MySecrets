define(['secret/module'], function (module) {
    module.service('secretService', ["$resource", function ($resource) {
        this.secretId = null;

        this.GetSecretId = function(){
            var secret = $resource('/secret/');
            return secret.get(function(data){
                console.log("secretid", data);
                this.secretId = data.secretId;
            }.bind(this)).$promise;
        }

        this.GetKeyValues = function () {
            var keyValueList = $resource('/secret/:secretId/KeyValue', { secretId: this.secretId });
            return keyValueList.query(function (data) {
                console.log("KeyValue list", data);
            }).$promise;
        }

        this.SaveKeyValues = function (data) {
            var keyValue = $resource('/secret/:secretId/KeyValue', { secretId: this.secretId });
            return keyValue.save(null, data, function () {
                console.log("keyValue saved successfully");
            }).$promise;
        }

        this.GetRandomText = function () {
            var randomText = $resource('/secret/:secretId/RandomText', { secretId: this.secretId });
            return randomText.get().$promise.then(function (data) {
                console.log("randomText", data);
                return data.RandomText;
            });;
        }

        this.SaveRandomText = function (data) {
            var randomText = $resource('/secret/:secretId/RandomText', { secretId: this.secretId });
            return randomText.save(null, { RandomText: data }, function () {
                console.log("randomText saved successfully");
            }).$promise;
        }
    }]);
});