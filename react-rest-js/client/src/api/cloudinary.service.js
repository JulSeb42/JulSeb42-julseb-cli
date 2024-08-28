/*=============================================== Cloudinary service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "data"

function errorHandler(err) {
    throw err
}

function uploadImage(file) {
    return http
        .put(SERVER_PATHS.UPLOADER.UPLOAD_PICTURE, file)
        .then(res => res.data)
        .catch(errorHandler)
}

export const cloudinaryService = {
    uploadImage,
}
