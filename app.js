var app = {};

app.config = require("./config");
app.express = require('express');
app.expressApp = app.express();
require('./routes')(app);

var server = app.expressApp.listen(app.config.port, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

})

module.exports = app;