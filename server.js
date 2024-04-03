const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
const __dirname = path.resolve();

const dotenv = require("dotenv")
const dbConnection = require("./db/dbConnection")
const portfolioRoutes = require("./routes/portfolioRoutes")
const loginRoutes = require("./routes/loginRoutes")

dotenv.config()
dbConnection()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use("/", portfolioRoutes)
app.use("/", loginRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => console.log("Running at port " + PORT))