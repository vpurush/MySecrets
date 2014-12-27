var configRoutes = function (app) {

    app.expressApp.use(app.express.static(__dirname + '\\public'));

    app.expressApp.use(function (req, res, next) {
        console.log('Request URL:', req.originalUrl);
        next();
    });


}
module.exports = configRoutes;