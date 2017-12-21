const models = require("./db/models")
const Question = models.Question
const Sequelize = require("sequelize")

const blank = "*"

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
			var ok = true
			if (type == answerType.fillInTheBlank) {
				ok = content.search("\\" + blank) > 0
			}
			if (ok) {
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
			} else {
				callback(false)
			}

		}
	},
	get: function(id) {

	},
	delete: function(id) {

	},

	answerType: answerType,
	blank: blank
}