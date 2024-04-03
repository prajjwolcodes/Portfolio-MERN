const { login } = require("../controlller/Login/loginController")

const router = require("express").Router()

router.post("/login", login)

module.exports = router