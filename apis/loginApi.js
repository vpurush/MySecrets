var jwt = require('jsonwebtoken');

module.exports = function (app) {
    var loginApi = {};
    
    loginApi.login = function (req, res) {
        var username = app.utils.encryption.createHashUsingSha256(req.body.username);
        var password = app.utils.encryption.createHashUsingSha256(req.body.password);
        console.log("username and password", username, password);
        app.entities.user.findOne({ username: username, password: password }, function (err, user) {
            if (err) {
                res.sendStatus(500);
                return;
            }
            if (user) {
                var tokenData = { username: username, userid: user._id, datetime: new Date() };
                var token = app.utils.encryption.createJsonWebToken(tokenData);
                res.send({ Success: true, Token: token });
            } else {
                res.send({ Success: false });
            }
            res.end();
        });
    }

    return loginApi;
}