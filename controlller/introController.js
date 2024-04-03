const { Intro } = require("../models/portfolioModel")

exports.updateIntro = async (req, res) => {
    const updatedIntro = await Intro.findOneAndUpdate({ _id: req.body._id }, req.body.data)
    res.status(200).json({
        data: updatedIntro,
        message: "Intro Sucessfully Updated"
    })
}