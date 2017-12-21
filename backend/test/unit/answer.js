const Answer = require("../../answer")
const models = require("../../db/models")
const Question = models.Question
const expect = require('chai').expect
const AnswerType = require("../../question").answerType
const sinon = require("sinon")

describe("test data validation of answers", function() {
	// For these tests to pass there must be at least one
	// question in the database and the database must be on

	it("should create a new answer to the question", async() => {
		var mockQuestion = {
			id: 0,
			content: "How was Canada?",
			answerType: AnswerType.shortAnswer
		}
		var mockPost = {
			content: "I liked it!",
			QuestionId: 0
		}

		var questionGet = sinon.stub(Question, 'findById')
		questionGet.resolves(mockQuestion)

		const a = await Answer.create(mockPost)

		questionGet.restore()

		expect(a.content).equals("I liked it!")
		expect(a.QuestionId).equals(0)
	})
	it("should reject the answer to the question", async() => {
		var mockQuestion = {
			id: 0,
			content: "Canda was * *",
			answerType: AnswerType.fillInTheBlank
		}
		var mockPost = {
			content: "good",
			QuestionId: 0
		}

		var questionGet = sinon.stub(Question, 'findById')
		questionGet.resolves(mockQuestion)

		Answer.create(mockPost) 
		.then(a => {
			assert("The answer was not rejected")
		})
		.catch(e => {
			expect(e).equals("Content does not match question type")
		})

		questionGet.restore()
	})
})

describe("test validation of different answer types", function(done) {
	it("should accept the multiple choice answer", function(done) {
		result = Answer.contentValidation[AnswerType.multipleChoice]("A", "")
		expect(result).equals(true)
		done()
	})
	it("should decline the mulitple choice answer", function(done) {
		result = Answer.contentValidation[AnswerType.multipleChoice]("Too long", "")
		expect(result).equals(false)
		done()
	})
	it("should accpet the short answer", function(done) {
		result = Answer.contentValidation[AnswerType.shortAnswer]("Alright", "")
		expect(result).equals(true)
		done()
	})
	it("should decline the short answer", function(done) {
		result = Answer.contentValidation[AnswerType.shortAnswer]("", "")
		expect(result).equals(false)
		done()
	})
	it("should accept the fill in the blank answer", function(done) {
		question = "I was * on *"
		answer = "good,tuesday"
		result = Answer.contentValidation[AnswerType.fillInTheBlank](answer, question)
		expect(result).equals(true)
		done()
	})
	it("should decline the fill in the blank answer", function(done) {
		question = "I was * on * "
		answer = "good"
		result = Answer.contentValidation[AnswerType.fillInTheBlank](answer, question)
		expect(result).equals(false)
		done() 
	})

})