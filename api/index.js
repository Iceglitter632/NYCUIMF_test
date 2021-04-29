console.log("hello world")

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const app = express()
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static("data"))

app.post("/coursetable", (req, res) => {
    res.send({
        message: req.protocol + '://' + req.get('host')
    })
})

app.post("/data", (req,res) => {
    res.send({
        message: req.protocol + '://' + req.get('host')
    })
})  

app.listen(process.env.PORT || 8081)