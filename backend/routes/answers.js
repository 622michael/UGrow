const express = require("express")
const router = express.Router()
const models = require("../db/models")
const Answer = require("../answer")
const Question = require("../question")

// A POST route that creates a new answer.
// Look at integretation test for an example
// JSON schemea to post.
// Returns the answer if it was created, 
// otherwise returns an error
router.post('/create', function(req, res) {
	 Answer.create(req.body)
	 .then(a => {
	 	json = {
	 		content: a.content,
	 		id: a.id,
	 		QuestionId: a.QuestionId
	 	}
	 	res.json(json)
	 })
	 .catch(error => {
	 	res.json(JSON.stringify({"error": error}))
	 })
})

module.exports = router