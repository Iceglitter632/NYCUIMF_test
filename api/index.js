console.log("hello world")

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const app = express()
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())

app.post("/coursetable", (req, res) => {
    res.send({
        message: `this is your courselist ${req.body.courses}`
    })
})

app.get("/download", (req,res) => {
    const file = "./data/CCBDA (MIDTERM)_sample.pdf"
    res.download(file)
})

app.listen(process.env.PORT || 8081)