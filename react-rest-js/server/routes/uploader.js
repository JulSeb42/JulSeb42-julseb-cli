/*=============================================== Uploader ===============================================*/

const { Router } = require("express")
const { fileUploader } = require("../config/cloudinary.config")
const { SERVER_PATHS } = require("../utils")

const router = Router()

router.put(
    SERVER_PATHS.UPLOADER.UPLOAD_PICTURE,
    fileUploader.single("imageUrl"),
    (req, res, next) => {
        if (!req.file) {
            next(new Error("No file uploaded"))
            return
        }

        res.json({ secure_url: req.file.path })
    }
)

module.exports = router
