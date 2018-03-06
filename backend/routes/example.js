var express = require('express')
var router = express.Router()
var models = require('../db/models')

router.use(function timeLog(req, res, next){
	// This function is called whenever the router is used

	console.log('Time: ', Date.now())
	next()
})

router.get('/', function(req, res) {
	res.send("Welcome to my routing services!")
})

router.get('/resources', function(req, res) {
	// models.Resource.findAll().then(resources => console.log(resources));
	models.sequelize.query("select * from resources", { type: models.sequelize.QueryTypes.SELECT}).then(resources => {
		console.log(resources)
		res.json({ resources })
	});
})

module.exports = router