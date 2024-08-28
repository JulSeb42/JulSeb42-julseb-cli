/*=============================================== Error handling ===============================================*/

const { COMMON_TEXTS } = require("../utils")

function errorHandler(app) {
    app.use((_, res) => {
        res.status(404).json({
            errorMessage: COMMON_TEXTS.ERRORS.ROUTE_NOT_EXIST,
        })
    })

    app.use((err, req, res) => {
        console.error("ERROR", req.method, req.path, err)

        if (!res.headersSent) {
            res.status(500).json({
                errorMessage: COMMON_TEXTS.ERRORS.SERVER_ERROR,
            })
        }
    })
}

module.exports = { errorHandler }
