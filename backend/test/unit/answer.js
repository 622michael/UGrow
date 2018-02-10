const models = require("../../db/models")

const Answer = require("../../answer")
const Question = require("../../question")
const AnswerType = Question.answerType

const expect = require('chai').expect
const sinon = require("sinon")

describe("test data validation of answers", function() {
	// Ruins database; creates an answer that has no question
	// Fix by actually creating the question
	
	// it("should create a new answer to the question", async() => {
	// 	var mockQuestion = {
	// 		id: 0,
	// 		content: "How was Canada?",
	// 		answerType: AnswerType.shortAnswer
	// 	}
	// 	var mockPost = {
	// 		content: "I liked it!",
	// 		QuestionId: 0,
	// 		private: false
	// 	}

	// 	var questionGet = sinon.stub(models.Question, 'findById')
	// 	questionGet.resolves(mockQuestion)

	// 	const a = await Answer.create(mockPost)

	// 	questionGet.restore()

	// 	expect(a.content).equals("I liked it!")
	// 	expect(a.QuestionId).equals(0)
	// 	expect(a.private).equals(false)
	// })
	it("should reject the answers that content is not valid", function(done) {
		var mockQuestion = {
			id: 0,
			content: "Canda was * *",
			answerType: AnswerType.fillInTheBlank,
		}
		var mockPost = {
			content: "good",
			QuestionId: 0,
			private: false
		}

		var questionGet = sinon.stub(models.Question, 'findById')
		questionGet.resolves(mockQuestion)

		Answer.create(mockPost) 
		.then(a => {
			assert("The answer was not rejected")
			done()
		})
		.catch(e => {
			expect(e).equals("Content does not match question type")
			done()
		})

		questionGet.restore()
	})
	it("should reject the answer to no question", function(done) {
		var mockPost = {
			content: "yeah I liked it",
			private: false
		}

		Answer.create(mockPost)
		.then(a => {
			assert("The answer was not rejected")
			done()
		})
		.catch(e => {
			expect(e).equals("Question ID cannot be null or less than 0")
			done()
		})
	})
	it("should reject an answer not specified as public or private", function(done) {
		var mockPost = {
			content: "It was a jolly christmas",
			QuestionId: 0
		}

		Answer.create(mockPost)
		.then(a => {
			assert("The answer was not rejected")
			done()
		})
		.catch(e => {
			expect(e).equals("Must specific if the question is public or private.")
			done()
		})
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

describe("test feeding functionality", function(done) {

	it("should throw an error on a 0 limit", function() {
		return Answer.public(0, 0)
		.then(answers => {
			expect("An error should have been thrown").equals("")
		})
		.catch(e => {
			expect(e).equals("Limit must be greater than 0.")
		})

	})
	it("should thow an error on a negative offset", function() {
		return Answer.public(1, -1)
		.then(answers => {
			expect("An error should have been thrown").equals("")
		})
		.catch(e => {
			expect(e).equals("Offset must be positive.")
		})
	})
	it("should not return any private objects", function() {
		return Answer.public(10, 0)
		.then( answers => {
			answers.forEach(answer => {
				expect(answer.private).equals(false)
			})
		})
	})
	it("should return only the limit", function() {
		return Answer.public(1, 0)
		.then( answers => {
			expect(answers.length).equal(1)
		})

	})

	it("should return the question object's content," +
		"id and answer ids", 
		function() {
			return Answer.public(1, 0)
			.then(answers => {
				answers.forEach( answer => {
					expect(answer).to.have.property("Question")
					expect(answer.Question).to.have.property("id")
					expect(answer.Question).to.have.property("content")
					expect(answer).to.have.property("id")
					expect(answer).to.have.property("content")
				})
			})
	})

	it("should throw an error on large requests", function() {
		return Answer.public(1000, 0)
		.then( answers => {
			expect(answers).equal(null)
		})
		.catch( error => {
			expect(error).equals("Limit must be less than 50.")
		})
	})
})