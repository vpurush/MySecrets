module.exports = function (app) {
    var userApi = {};
    
    userApi.userPOST = function (req, res) {
        var username = app.utils.encryption.createHashUsingSha256(req.body.username);
        var password = app.utils.encryption.createHashUsingSha256(req.body.password);
        console.log("username and password", username, password);
        var user = new app.entities.user({ username: username, password: password });
        user.save(function (err) {
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.end();
        });
    }

    return userApi;
}