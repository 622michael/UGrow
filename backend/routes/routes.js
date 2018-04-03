var express = require('express')
var router = express.Router()
var { sequelize, answer, question, user } = require('../db/models')
// var test = require('../db/models')
// console.log(test)

router.use(function timeLog(req, res, next){
	// This function is called whenever the router is used

	console.log('Time: ', Date.now())
	next()
})

router.get('/feed', function(req, res) {
	answer.findAll({
		limit: 20,
		include: question
	}).then(answers => res.json({answers}))
})

router.get('/feed/:id', function(req, res) {
	let result = {};
	answer.findAll({
		include: question,
		where: {
			userId: req.params.id
		}
	}).then(answers => {
		result.answers = answers;
		return user.findById(req.params.id)
	}).then(user => {
		result.user = user;
		res.json(result)
	})
})

router.get('/resources', function(req, res) {
	sequelize.query("select * from resources", { type: sequelize.QueryTypes.SELECT}).then(resources => {
		console.log(resources)
		res.json({ resources })
	});
})

// check that user is logged in
// router.use('/', function(req, res, next) {
// 	if (req.user) next();
// 	else res.send(false)
// })

router.get('/answers/:branch_or_root', function(req, res) {
	answer.findAll({
		include: question,
		where: {
			qType: req.params.branch_or_root
		}
	}).then( answers => res.json({answers}) )
})

router.get('/questions/:branch_or_root', function(req, res) {
	question.findAll({
		where: {
			qType: req.params.branch_or_root
		}
	}).then(questions => res.json({questions}))
})

router.post('/answer', function(req, res) {
	answer.create(Object.assign(req.body, {
		userId: 2
	})).then(result => res.json({ success: true} ))
})

router.post('/question', function(req, res) {
	question.create(req.body).then(result => res.json({ success: true }))
})

module.exports = router