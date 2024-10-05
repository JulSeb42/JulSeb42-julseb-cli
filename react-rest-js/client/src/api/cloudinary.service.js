/*=============================================== Cloudinary service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "shared"

const errorHandler = err => {
    throw err
}

const uploadImage = async file =>
    await http
        .put(SERVER_PATHS.UPLOADER.UPLOAD_PICTURE, file)
        .then(res => res.data)
        .catch(errorHandler)

export const cloudinaryService = {
    uploadImage,
}
