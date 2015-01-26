module.exports = function (app) {
    var userApi = {};
    
    userApi.userPOST = function (req, res) {
        var username = app.utils.encryption.createHashUsingSha256(req.body.username);
        var password = app.utils.encryption.createHashUsingSha256(req.body.password);
        console.log("username and password", username, password);
        app.entities.user({ username: username, password: password }).save();
        res.end();
    }

    return userApi;
}