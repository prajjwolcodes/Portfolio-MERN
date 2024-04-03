const { Education } = require("../models/portfolioModel")


exports.addEducation = async (req, res) => {
    const addedEducation = await Education.create(req.body)
    res.status(200).json({
        data: addedEducation,
        message: "Education Sucessfully Added "
    })
}

exports.updateEducation = async (req, res) => {
    const id = req.params.id
    try {
        const updatedEducation = await Education.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            data: updatedEducation,
            message: "Education Sucessfully Updated "
        })
    } catch (error) {
        console.log(error.message);
    }
}

exports.deleteEducation = async (req, res) => {
    const id = req.params.id
    try {
        await Education.findByIdAndDelete(id)
        res.status(200).json({
            message: "Education Sucessfully Deleted "
        })
    } catch (error) {
        console.log(error.message);
    }
}