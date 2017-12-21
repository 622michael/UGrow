const express = require("express")
const router = express.Router()
const models = require("../db/mdoels")
const Answer = require("../../answer")
const Question = require("../../question")

const Serializer = require('sequelize-to-json')
const schema = {
	include: ['@id', '@content'],

	assoc: {
		question: {
			include: ['content', 'id'],
			as: {content: 'content', 'id'}
		}
	}


} 
const serializer = new Serializer(models.Answer, schema)

router.post('/create', function(req, res) {
	 Answer.create(req.body)
	 .then(a => {
	 	json = serializer.seralize(a, scheme)
	 	res.json(json)
	 })
	 .catch(error) {

	 }
})

module.export = router