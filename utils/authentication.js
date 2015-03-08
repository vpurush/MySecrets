module.exports = function (app) {
    var auth = {};

    auth.verifyAuthToken = function (req, res, next) {
        var authToken = req.header("X-Auth-Token");
        app.utils.encryption.decryptJsonWebToken(authToken).then(function (user) {
            if (user) {
                req.User = user;
                next();
            } else {
                res.status(401).end();
            }
        });
    }
    return auth;
}