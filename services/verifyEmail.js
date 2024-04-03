const User = require("../models/userModel")


exports.verifyOtp = async (req, res) => {
    const { otp } = req.body
    if (!otp) {
        return res.status(400).json({
            message: "Please Enter your OTP and your email"
        })
    }

    const userFound = await User.findOne({ email: "shresthaprajjwol4@gmail.com" })
    if (!userFound) {
        return res.json({
            message: "No account registered with that email"
        })
    }

    if (userFound.otp != otp) {
        res.status(400).json({
            message: "Your OTP is incorrect"
        })
    }
    else {
        userFound.otp = undefined
        userFound.save()
        res.status(200).json({
            message: "You can reset your password"
        })
    }
}