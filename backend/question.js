const models = require("./db/models")
const Question = models.Question
const Sequelize = require("sequelize")

const answerType = {
		multipleChoice: 0,
		shortAnswer: 1,
		fillInTheBlank: 2
	}
const maxAnswerLength = Object.keys(answerType).length

module.exports = {
	create: function(content, type, callback) {
		if (type >= maxAnswerLength|| type < 0) {
			callback(false)
			return
		} else {
			Question.build({
				content: content, 
				answerType: type
			}).save()
			.then(q => {
				callback(q)
			})
			.catch(Sequelize.ValidationError, error => {
				callback(false)
			})
			.catch(error => {
				throw error
			})


		}
	},
	get: function(id) {

	},
	delete: function(id) {

	},
	answerType: answerType
}