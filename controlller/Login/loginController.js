const User = require("../../models/userModel");
const generateOtp = require("../../services/optGenerator");
const sendEmail = require("../../services/sendEmail");

exports.login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password)
        return res.status(400).json({
            message: "Fill all the fields"
        })

    const user = await User.findOne({ email })

    if (!user)
        return res.status(400).json({
            message: "Email doesn't match"
        })


    if (password !== user.password)
        return res.status(400).json({
            message: "Incorrect password"
        })


    res.status(200).json({
        user: {
            email: email
        },
        message: "You are succesfully Logged In"
    })

}


exports.forgotPassword = async (req, res) => {
    const { email } = req.body
    const userFound = await User.findOne({ email: email })
    if (!userFound) {
        return res.status(400).json({
            message: "No account registered with that email"
        })
    }

    const otp = generateOtp()
    userFound.otp = otp
    await userFound.save()

    await sendEmail({
        email: email,
        subject: "Change your password using this OTP",
        text: "Use this one time password to reset your password " + otp
    })

    res.status(200).json({
        message: "OTP succesfully sent"
    })
}

exports.resetPassword = async (req, res) => {
    const { confirmPassword, password } = req.body
    if (confirmPassword !== password)
        return res.status(400).json({
            message: "Password Donot Match"
        })
    const userFound = await User.findOne({ email: "shresthaprajjwol4@gmail.com" })

    userFound.password = password
    await userFound.save()

    res.status(200).json({
        message: "Password Successfully changed"
    })
}