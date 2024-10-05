/*=============================================== App ===============================================*/

require("dotenv/config")
const express = require("express")
const config = require("./config")
const allRoutes = require("./routes")
const { errorHandler } = require("./error-handling")
const { BASE_API_URL } = require("../shared")

require("./db")

const app = express()
config(app)
app.use(BASE_API_URL, allRoutes)
errorHandler(app)

module.exports = app
