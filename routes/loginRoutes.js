const { login, forgotPassword, resetPassword } = require("../controlller/Login/loginController")
const { verifyOtp } = require("../services/verifyEmail")

const router = require("express").Router()

router.post("/login", login)
router.route("/forgotpassword").post(forgotPassword)
router.route("/verifyotp").post(verifyOtp)
router.route("/resetpassword").post(resetPassword)

module.exports = router