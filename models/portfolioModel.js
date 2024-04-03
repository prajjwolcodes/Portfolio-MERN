const { default: mongoose } = require("mongoose");

const introSchema = new mongoose.Schema({
    name: String,
    caption: String,
    description: String
})

const aboutSchema = new mongoose.Schema({
    description1: String,
    description2: String,
    skill: [{
        tech: String,
        src: String
    }],
})

const educationSchema = new mongoose.Schema({
    board: String,
    period: String,
    uni: String,
    description: String
})

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String,
    imgURL: String,
    code: String
})

const contactSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: Number,
    address: String
})

module.exports = {
    Intro: mongoose.model("Intro", introSchema),
    About: mongoose.model("About", aboutSchema),
    Education: mongoose.model("Education", educationSchema),
    Project: mongoose.model("Project", projectSchema),
    Contact: mongoose.model("Contact", contactSchema)
}