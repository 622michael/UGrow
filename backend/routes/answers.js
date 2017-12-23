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
	 	res.json({"error": error})
	 })
})

// A pagination function to get all public answers
// Returns JSON:
//	{
// 		"answers": [
//			{
//				question: {
//					content: string
//					id: int
//				},
//				content: string
//				id: int
//			}
//		]
//		"next:" : string - url for next page
// 	}
//		
// Request parameters:
// 	- Limit (optional) 
//		the maximum number of objects to return
//		default: 10
//
//  - Offset: (optional)
// 		indicates where the next page begins

router.get('/public', function(req, res) {
	var offset = 0;
	if (req.query.offset != null) {
		offset = parseInt(req.query.offset);
	}
	var limit = 10;
	if (req.query.limit != null) {
		limit = parseInt(req.query.limit)
	} 

	Answer.public(limit, offset)
	.then( answers => {
		answerJson = []
		answers.forEach(answer => {
			if (answer.Question != null) {
				json = {
					content: answer.content,
					id: answer.id,
					question: {
						id: answer.Question.id,
						content: answer.Question.content
					}
				}
				answerJson.push(json)
			}
		})

		var next = offset + limit;
		next = "/public?offset=" + next + "&limit=" + limit;

		json = {
			"answers": answerJson,
			"next": next
		};

		res.json(json);
	})
	.catch(error => {
		console.log("Found error: ", error)
		res.json({"error": error})
	})

})

module.exports = router