module.exports = function (app) {
    var secretApi = {};

    secretApi.GetSecretId = function (req, res) {
        var userId = req.User.userid;
        app.entities.secret.findOne({UserId: userId}, function (err, data) {
            if (err) {
                res.sendStatus(500);
                return;
            }
            if (data) {
                res.send({ secretId: data._id });
                res.end();
            } else {
                var secret = new app.entities.secret({UserId: userId});
                secret.save(function (err, obj) {
                    if (err) {
                        res.sendStatus(500);
                        return;
                    }
                    res.send({ secretId: obj._id });
                    res.end();
                });
            }
        });
    };

    secretApi.GetKeyValueList = function (req, res) {
        app.entities.secret.findOne({ _id: req.params.secretId }, function (err, data) {
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.send(data.KeyValues).end();
        });
    }

    secretApi.SaveKeyValueList = function (req, res) {
        console.log("req.body", req.body);
        app.entities.secret.findOneAndUpdate({ _id: req.params.secretId }, { KeyValues: req.body ? req.body : [] }, function (err, data) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            res.status(200).end();
        });
    }

    secretApi.GetRandomText = function (req, res) {
        app.entities.secret.findOne({ _id: req.params.secretId }, function (err, data) {
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.send({ RandomText: data.RandomText }).end();
        });
    }

    secretApi.SaveRandomText = function (req, res) {
        console.log("req.body", req.body);
        app.entities.secret.findOneAndUpdate({ _id: req.params.secretId }, { RandomText: req.body.RandomText ? req.body.RandomText : '' }, function (err, data) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            res.status(200).end();
        });
    }

    return secretApi;
}