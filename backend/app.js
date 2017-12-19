const express = require('express')
const app = express()

const exampleRoute = require("./routes/example")

// Set up routing for the app

app.use('/', exampleRoute)


module.exports = app