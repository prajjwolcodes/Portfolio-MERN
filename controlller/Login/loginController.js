const User = require("../../models/userModel");

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