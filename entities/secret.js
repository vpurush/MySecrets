module.exports = function (app) {
    var secretEntity = app.mongoose.model('secret', {
        UserId: { type: app.mongoose.Schema.Types.ObjectId, ref: 'user' },
        KeyValues: [],
        RandomText: String
    });
    return secretEntity;
}