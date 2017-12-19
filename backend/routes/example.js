var express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next){
	// This function is called whenever the router is used

	console.log('Time: ', Date.now())
	next()
})

router.get('/', function(req, res) {
	res.send("Welcome to my routing services!")
})

module.exports = router