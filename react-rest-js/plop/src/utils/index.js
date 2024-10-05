/*=============================================== Exports ===============================================*/

const {
    BASE_CLIENT_PATH,
    BASE_SERVER_PATH,
    BASE_SHARED_PATH,
} = require("./consts")
const { generatePageRoute } = require("./generate-page-route")
const { surroundBrackets } = require("./surround-brackets")

module.exports = {
    BASE_CLIENT_PATH,
    BASE_SERVER_PATH,
    BASE_SHARED_PATH,
    generatePageRoute,
    surroundBrackets,
}
