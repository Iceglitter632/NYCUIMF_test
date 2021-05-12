// Import Packages
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

// Import paths self-defined
const dbRouter = require("./db")

// Use packages in app
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("combined"))
app.use(express.static("data"))
app.unsubscribe(express.urlencoded({extended:false}))


//create coursetable
app.post("/coursetable", (request, response) => {
    res.send({
        message: request.protocol + '://' + request.get('host')
    })
})

//upload new file to sql
app.post("/data", (request, response) => {
    res.send({
        message: request.protocol + '://' + request.get('host')
    })
})

//create professor table
app.post("/professor", (request, response) => {
    res.send({
        message: request.protocol + '://' + request.get('host')
    })
})

// Use self-defined routes
app.use("/dbRouter", dbRouter)

app.listen( process.env.PORT || 8081 )