/*=============================================== Server ===============================================*/

const app = require("./app")
const { PORT } = require("./utils")

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port http://localhost:${PORT}`)
})
