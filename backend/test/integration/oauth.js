var expect = require('Chai').expect;
var request = require('request');


describe("Get the example route", function() {
	it("should return 'welcome to testing services'", function(done) {
		request.get('http://localhost:3000', function(err, res, body) {
			expect(body).to.equal('Welcome to my routing services!')
			done()
		})
	});
})