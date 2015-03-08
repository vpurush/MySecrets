var configRoutes = function (app) {
    var bodyParser = require('body-parser');

    // parse application/x-www-form-urlencoded
    app.expressApp.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.expressApp.use(bodyParser.json())

    app.expressApp.use(app.express.static(__dirname + '\\public'));

    app.expressApp.use(function (req, res, next) {
        console.log('Request URL:', req.originalUrl);
        next();
    });

    app.expressApp.post("/user", app.apis.userApi.userPOST);
    app.expressApp.post("/login", app.apis.loginApi.login);
    app.expressApp.get("/secret/", app.utils.authentication.verifyAuthToken, app.apis.secretApi.GetSecretId);
    app.expressApp.get("/secret/:secretId/keyvalue/", app.utils.authentication.verifyAuthToken, app.apis.secretApi.GetKeyValueList);
    app.expressApp.post("/secret/:secretId/keyvalue/", app.utils.authentication.verifyAuthToken, app.apis.secretApi.SaveKeyValueList);
    app.expressApp.get("/secret/:secretId/randomtext/", app.utils.authentication.verifyAuthToken, app.apis.secretApi.GetRandomText);
    app.expressApp.post("/secret/:secretId/randomtext/", app.utils.authentication.verifyAuthToken, app.apis.secretApi.SaveRandomText);

}
module.exports = configRoutes;