var app = {};

app.config = require("./config");
app.express = require('express');
app.expressApp = app.express();
app.mongoose = require('mongoose');
app.mongoose.connect(app.config.db_connection);

app.utils = {
    encryption: require("./utils/encryption")(app),
    authentication: require("./utils/authentication")(app)
};

var server = app.expressApp.listen(app.config.port, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

})

app.apis = {
    userApi: require("./apis/userApi")(app),
    loginApi: require("./apis/loginApi")(app),
    secretApi: require("./apis/secretApi")(app)
};

app.entities = {
    user: require("./entities/user")(app),
    secret: require("./entities/secret")(app),
    keyvalue: require("./entities/keyvalue")(app)
}

require('./routes')(app);

module.exports = app;