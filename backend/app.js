const express = require('express')
const app = express()

const routes = require("./routes/routes")
const auth = require("./routes/auth")
// const answerRoute = require("./routes/answers")

// Set up JSON and URL post request encodings
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Set up routing for the app
app.use('/', auth)
app.use('/', routes)
// app.use('/answer', answerRoute)


module.exports = app

