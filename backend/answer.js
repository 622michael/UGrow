const AnswerType = require("./question").answerType
var isAlphanumeric = require('is-alphanumeric');
var QuestionBlank = require("./question").blank
var models = require("./db/models")
const Sequelize = require("sequelize")

const multipleChoice = AnswerType.multipleChoice
const shortAnswer = AnswerType.shortAnswer
const fillInTheBlank = AnswerType.fillInTheBlank

const validateContent = {}

validateContent[AnswerType.multipleChoice] = function(answer, question) {
	// Multiple choice answers must be a single letter

	if (answer.length != 1) {
		return false
	} else if (!isAlphanumeric(answer)) {
		return false
	}

	return true
}

validateContent[AnswerType.shortAnswer] = function(answer, question) {
	// Must have content

	if (answer.length == 0) {
		return false
	} 
	return true
}

validateContent[AnswerType.fillInTheBlank] = function(answer, question) {
	// The number of answers should be equal to the number
	// of blanks
	const numAnswers = answer.split(",").length
	var numBlanks = 0
	
	for (var i = 0; i < question.length; i++) {
		if (question.charAt(i) == QuestionBlank) {
			numBlanks = numBlanks + 1
		}
	}

	return numAnswers == numBlanks
}

module.exports = {
	create: function (raw) {
		return new Promise((resolve, reject) => {
			if (raw.QuestionId == null || raw.QuestionId < 0) {
				reject("Question ID cannot be null or less than 0")
				return
			} 
			if (raw.private == null) {
				reject("Must specific if the question is public or private.")
				return
			}


			models.Question.findById(raw.QuestionId)
			.then(q => {
				if (validateContent[q.answerType](raw.content, q.content)) {
					return models.Answer.build({
						content: raw.content,
						QuestionId: q.id,
						private: raw.private
					}).save()
				} else {
					reject("Content does not match question type")
				}
			})
			.then(a => {
				resolve(a)
			})
			.catch(error => {
				reject(error)
			})
		})
	},

	contentValidation: validateContent
}