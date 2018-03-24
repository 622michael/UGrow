const express = require('express')
const app = express()

const routes = require("./routes/routes")
const auth = require("./routes/auth")
// const answerRoute = require("./routes/answers")

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
})

// Set up JSON and URL post request encodings
var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

// Set up routing for the app
app.use('/', auth)
app.use('/', routes)
// app.use('/answer', answerRoute)


module.exports = app