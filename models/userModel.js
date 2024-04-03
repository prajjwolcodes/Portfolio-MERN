const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    otp: Number
})

const User = mongoose.model("User", userSchema)
module.exports = User