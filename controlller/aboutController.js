const { About } = require("../models/portfolioModel")


exports.updateAbout = async (req, res) => {

    const { description1, description2, skill } = req.body.data
    try {
        const updatedAbout = await About.findOneAndUpdate({ _id: req.body._id }, {
            description1, description2,
            skill: [{
                tech: skill
            }]
        })
        res.status(200).json({
            data: updatedAbout,
            message: "About Sucessfully Updated"
        })

    } catch (error) {
        console.log(error.message);
    }
}
