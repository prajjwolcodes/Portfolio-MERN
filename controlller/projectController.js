const { Project } = require("../models/portfolioModel")

exports.addProject = async (req, res) => {
    const addedProject = await Project.create(req.body)
    res.status(200).json({
        data: addedProject,
        message: "Education Sucessfully Added "
    })
}

exports.deleteProject = async (req, res) => {
    const id = req.params.id
    try {
        await Project.findByIdAndDelete(id)
        res.status(200).json({
            message: "Education Sucessfully Deleted "
        })
    } catch (error) {
        console.log(error.message);
    }
}

exports.updateProject = async (req, res) => {
    const id = req.params.id
    try {
        const updatedProject = await Project.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            data: updatedProject,
            message: "Project Sucessfully Updated "
        })
    } catch (error) {
        console.log(error.message);
    }
}