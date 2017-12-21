const express = require('express')
const app = express()

const exampleRoute = require("./routes/example")
const oauthRoute = require("./routes/oauth")

// Set up routing for the app

app.use('/', exampleRoute)
app.use('/oauth', oauthRoute)


module.exports = app

