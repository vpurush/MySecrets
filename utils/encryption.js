var cryptoJS = require('crypto-js');
var sha256 = cryptoJS.SHA256;
var aes = cryptoJS.AES;
var jwt = require('jsonwebtoken');

module.exports = function (app) {
    var encryption = {};

    encryption.createHashUsingSha256 = function (input) {
        input = input + app.config.sha2_salt;
        return sha256(input).toString(cryptoJS.enc.Hex);
    }

    encryption.createJsonWebToken = function (input) {
        return jwt.sign(input, app.config.jwt_private_key);
    }

    return encryption;
}