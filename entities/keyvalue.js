module.exports = function (app) {
    var keyValueEntity = app.mongoose.model('keyvalue', {
        Key: String,
        Value: String,
    });
    return keyValueEntity;
}