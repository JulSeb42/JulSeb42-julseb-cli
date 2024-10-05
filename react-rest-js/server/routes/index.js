/*=============================================== All routes ===============================================*/

const { Router } = require("express")
const { SERVER_PATHS } = require("../../shared")
const auth = require("./auth")
const users = require("./users")
const uploader = require("./uploader")
/* prepend import - do not remove */

const router = Router()

router.get("/", (_, res) => {
    res.json("All good in here")
})

router.use(SERVER_PATHS.AUTH.ROOT, auth)
router.use(SERVER_PATHS.USERS.ROOT, users)
router.use(SERVER_PATHS.UPLOADER.ROOT, uploader)
/* prepend router - do not remove */

module.exports = router
