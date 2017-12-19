const express = require("express")
const app = express()

const example = require("./example")

// All routes defined here

app.get('/', example.data.printHello)
app.get('/user/:name', example.data.printName)

app.listen(3000, () => console.log("WOAH WOAH WOAH"))