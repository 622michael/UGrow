const express = require("express")
const app = express()

const example = require("./example")

const models = require("./db/models")

// All routes defined here

app.get('/', example.data.printHello)
app.get('/user/:name', example.data.printName)


models.sequelize.authenticate().then(function(err) {
	// Connected to database succesfully

	app.listen(3000, () => console.log("WOAH WOAH WOAH"))
}).catch(function(err) {
	// Failed to connect to database

	console.log("Failure to connect to database:", err)
});