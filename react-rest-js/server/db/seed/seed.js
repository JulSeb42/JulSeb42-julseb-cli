/*=============================================== Seed fake users ===============================================*/

require("dotenv/config")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const { getRandomString, getRandomAvatar } = require("@julseb-lib/utils")
const { UserModel } = require("../../models")

// Hash password
const password = "Password42"
const salt = bcrypt.genSaltSync()
const hash = bcrypt.hashSync(password, salt)

mongoose.connect(process.env.MONGODB_URI)

const fakeUser = {
    fullName: "Julien Sebag",
    email: "julien.sebag@me.com",
    password: hash,
    verified: true,
    verifyToken: getRandomString(20),
    avatar: getRandomAvatar(),
}

UserModel.insertMany(fakeUser)
    .then(users => {
        console.log(
            `Success, you added ${users.length} user${
                users.length > 1 ? "s" : ""
            } to the db`
        )
        mongoose.connection.close()
    })
    .catch(err => console.log(err))

// Run `node db/seed.js`
