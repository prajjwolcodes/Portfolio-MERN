const { updateIntro } = require("../controlller/introController")
const { updateAbout } = require("../controlller/aboutController")
const { Intro, About, Education, Project, Contact } = require("../models/portfolioModel")
const { addEducation, updateEducation, deleteEducation } = require("../controlller/educationContoller")
const { addProject, deleteProject, updateProject } = require("../controlller/projectController")
const { updateContact } = require("../controlller/contactController")

const router = require("express").Router()

router.get("/getdata", async (req, res) => {
    const intros = await Intro.find()
    const abouts = await About.find()
    const educations = await Education.find()
    const projects = await Project.find()
    const contacts = await Contact.find().select("-_id")

    res.status(200).json({
        intros, abouts, educations, projects, contacts
    })
})

// INTRO 
router.patch("/updateintro", updateIntro)

// ABOUT 
router.patch("/updateabout", updateAbout)

// EDUCATION 
router.post("/addeducation", addEducation)
router.patch("/updateeducation/:id", updateEducation)
router.delete("/deleteeducation/:id", deleteEducation)

// PROJECTS 
router.route("/addproject").post(addProject)
router.delete("/deleteproject/:id", deleteProject)
router.patch("/updateproject/:id", updateProject)

// CONTACTS 
router.patch("/updatecontact", updateContact)

module.exports = router