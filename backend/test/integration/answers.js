var expect = require("Chai").expect
var request = require("request")
var Question = require("../../question")
var AnswerType = Question.answerType

describe("Test routing and response to answer create", function() {
	it("should return a new answer in json form", function(done) {
		var q = Question.create("How is Rome?", AnswerType.shortAnswer, function(q) {
			if (!q) {
				assert("Failed to create test question")
				done()
			} else {
				mockAnswer = {
					content: "Rome was alright",
					QuestionId: q.id,
					private: false
				}
				request({
					uri: "http://localhost:3000/answer/create",
					method: "POST",
					json: mockAnswer
				}, function(error, response, body) {
					if (error != null) {
						// is the server running?
						expect(1).equals(2)
						done()
					} else {					
						expect(body).to.have.property('id')
						expect(body.content).equals("Rome was alright")
						expect(body).to.have.property('QuestionId')
						done()
					}

				})
			}
		})

	})
	it("should return an error", function(done) {
		mockAnswer = {
			content: "This is an answer to no question"
		}
		request({
			uri: "http://localhost:3000/answer/create",
			method: "POST",
			json: mockAnswer
		}, function(error, response, body) {
			if (error != null) {
				expect(1).equals(2)
				done()
			} else {
				expect(body).to.have.property('error')
				done()
			}
		})

	})
})