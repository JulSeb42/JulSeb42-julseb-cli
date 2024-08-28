/*=============================================== Sendmail function ===============================================*/

require("dotenv/config")
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
        user: process.env.EMAIL,
        pass: process.env.WORD,
    },
})

function sendMail(to, subject, html) {
    let mailDetails = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        html: html,
    }

    transporter.sendMail(mailDetails, (err, data) => {
        if (err) {
            console.log(err)
            return err
        } else {
            console.log("Email sent successfully.")
        }
    })
}

module.exports = { sendMail }
