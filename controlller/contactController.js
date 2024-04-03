const { Contact } = require("../models/portfolioModel")

exports.updateContact = async (req, res) => {
    const updateContact = await Contact.findOneAndUpdate({ email: req.body.email }, req.body)
    res.status(200).json({
        data: updateContact,
        message: "Contact Sucessfully Updated"
    })
}