/*=============================================== Consts ===============================================*/

require("dotenv/config")

const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/react-rest-js"

const PORT = process.env.PORT || 5005

const ORIGIN = process.env.ORIGIN || "http://localhost:5173"

const TOKEN_SECRET = process.env.TOKEN_SECRET || ""

const jwtConfig = {
    algorithm: "HS256",
    expiresIn: "10d",
}

const SALT_ROUNDS = 10

module.exports = {
    MONGODB_URI,
    PORT,
    ORIGIN,
    TOKEN_SECRET,
    jwtConfig,
    SALT_ROUNDS,
}
