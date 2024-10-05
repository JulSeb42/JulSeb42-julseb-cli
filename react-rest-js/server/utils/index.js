/*=============================================== Exports ===============================================*/

const {
    MONGODB_URI,
    PORT,
    ORIGIN,
    TOKEN_SECRET,
    jwtConfig,
    SALT_ROUNDS,
} = require("./consts")
const { sendMail } = require("./send-mail")

module.exports = {
    sendMail,
    MONGODB_URI,
    PORT,
    ORIGIN,
    TOKEN_SECRET,
    jwtConfig,
    SALT_ROUNDS,
}
