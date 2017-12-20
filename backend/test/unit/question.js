const Question = require("../../question")
const AnswerTypes = Question.answerType
const expect = require("chai").expect

describe("Tests to test creation of questions", function() {
	it("should return a new question whose content is 'Does this work?'", function(done) {
		Question.create("Does this work?", AnswerTypes.multipleChoice, function(q) {
			expect(q.content).equals("Does this work?")
			done()
		})
	})
	it("should not create a question whose content is null", function(done) {
		Question.create(null, AnswerTypes.multipleChoice, function(q) {
			expect(q).equals(false)
			done()
		})
	})
	it("should not create a question whose answer type is too high", function(done) {
		Question.create("Can you answer this question?", 12502, function(q) {
			expect(q).equals(false)
			done()
		})
	})
	it("should not create a question whose answer type is negative", function(done) {
		Question.create("Can you answer this question?", -1, function(q) {
			expect(q).equals(false)
			done()
		})
	})
})