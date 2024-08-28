/*=============================================== All routes ===============================================*/

const { Router } = require("express")
const { SERVER_PATHS } = require("../utils")
const auth = require("./auth")
const users = require("./users")
const uploader = require("./uploader")
// prependImport

const router = Router()

router.get("/", (_, res) => {
    res.json("All good in here")
})

router.use(SERVER_PATHS.AUTH.ROOT, auth)
router.use(SERVER_PATHS.USERS.ROOT, users)
router.use(SERVER_PATHS.UPLOADER.ROOT, uploader)
// prependRouterUse

module.exports = router
