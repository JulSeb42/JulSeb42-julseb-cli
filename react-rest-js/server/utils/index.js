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
const { COMMON_TEXTS } = require("./common-texts")
const { BASE_API_URL, SERVER_PATHS } = require("./server-paths")
const { SITE_DATA } = require("./site-data")

module.exports = {
    MONGODB_URI,
    PORT,
    ORIGIN,
    TOKEN_SECRET,
    jwtConfig,
    SALT_ROUNDS,
    sendMail,
    COMMON_TEXTS,
    BASE_API_URL,
    SERVER_PATHS,
    SITE_DATA,
}
