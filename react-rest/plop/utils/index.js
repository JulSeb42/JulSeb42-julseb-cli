/*=============================================== Exports ===============================================*/

const {
    BASE_SHARED_PATH,
    BASE_CLIENT_PATH,
    BASE_SERVER_PATH,
} = require("./consts")
const generatePageRoute = require("./generate-page-route")
const surroundBrackets = require("./surround-brackets")
const addOpenBrackets = require("./addOpenBrackets")
const addClosingBrackets = require("./addClosingBrackets")

module.exports = {
    BASE_SHARED_PATH,
    BASE_CLIENT_PATH,
    BASE_SERVER_PATH,
    generatePageRoute,
    surroundBrackets,
    addOpenBrackets,
    addClosingBrackets,
}
