const express = require('express')
const app = express()

const exampleRoute = require("./routes/example")

// Set up JSON and URL post request encodings
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Set up routing for the app
app.use('/', exampleRoute)


module.exports = app