const { default: mongoose } = require("mongoose");

async function dbConnection() {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Database Connected");
}

module.exports = dbConnection