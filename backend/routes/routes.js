var express = require('express')
var router = express.Router()
var { sequelize, Answer, Question } = require('../db/models')

router.use(function timeLog(req, res, next){
	// This function is called whenever the router is used

	console.log('Time: ', Date.now())
	next()
})

router.get('/', function(req, res) {
	res.send("Welcome to my routing services!")
})

router.get('/feed', function(req, res) {
	Answer.findAll({ limit: 20 }).then(answers => res.json(answers))
})

router.get('/resources', function(req, res) {
	sequelize.query("select * from resources", { type: sequelize.QueryTypes.SELECT}).then(resources => {
		console.log(resources)
		res.json({ resources })
	});
})

// check that user is logged in
router.use('/', function(req, res, next) {
	if (req.user) next();
	else res.send(false)
})

router.get('/answers/:branch_or_root', function(req, res) {
	Answer.findAll({
		include: Question,
		where: {
			branch_or_root: req.params.branch_or_root
		}
	}).then( answers => res.json(answers) )
})

router.get('/questions/:branch_or_route', function(req, res) {
	Question.findAll({
		where: {
			branch_or_root: req.params.branch_or_root
		}
	})
})

router.post('/answer', function(req, res) {
	Answer.create(req.body).then(result => res.json({ success: true} ))
})

router.post('/question', function(req, res) {
	Question.create(req.body).then(res.json).then(result => res.json({ success: true }))
})

module.exports = router