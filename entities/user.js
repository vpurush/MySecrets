module.exports = function (app) {
    var userEntity = app.mongoose.model('user', {
        username: String,
        password: String,
        createTS: { type: Date, default: new Date() },
        updateTS: { type: Date, default: new Date() }
    });
    return userEntity;
}