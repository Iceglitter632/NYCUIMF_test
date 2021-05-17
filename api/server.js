// Import Packages
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

// Import paths self-defined
const dbRouter = require("./routes")

// Use packages in app
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("combined"))
app.use(express.static("data"))
app.unsubscribe(express.urlencoded({extended:false}))


//create coursetable
app.post("/coursetable", (req, res) => {
    res.send({
        message: req.protocol + '://' + req.get('host')
    })
})

//upload new file to sql
app.post("/data", (req, res) => {
    res.send({
        message: req.protocol + '://' + req.get('host')
    })
})

//create professor table
app.post("/professor", (req, res) => {
    res.send({
        message: req.protocol + '://' + req.get('host')
    })
})

// Use self-defined routes
app.use("/dbRouter", dbRouter);

app.listen( process.env.PORT || 8081 )