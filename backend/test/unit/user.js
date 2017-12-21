const User = require('../../user')
const expect = require('chai').expect 

describe("Tests to test creation of users", function() {
    it("should return a new user with id '1' email'rachel@gmail.com', name 'Rachel', userId '123', expireTime '456', id_Token '789'", function(done) {
		User.create("rachel@gmail.com","Rachel", 123, 456, "789", function(user) {
            expect(user.email).equals("rachel@gmail.com")
            expect(user.name).equals("Rachel")
            expect(user.userId).equals(123)	
            expect(user.expireTime).equals(456)
            expect(user.id_token).equals('789')		
            done()
		})
	})
	it("should not create a user whose email is null", function(done) {
		User.create(null, "Rachel", "123", "456", "789", function(user) {
			expect(user).equals(false)
			done()
		})
    })
    it("should not create a user whose name is null", function(done) {
		User.create("rachel@gmail.com", null, "123", "456", "789", function(user) {
			expect(user).equals(false)
			done()
		})
    })
    it("should not create a user whose userId is null", function(done) {
		User.create("rachel@gmail.com", "Rachel", null, "456", "789", function(user) {
			expect(user).equals(false)
			done()
		})
    })
    it("should not create a user whose expireTime is null", function(done) {
		User.create("rachel@gmail.com", "Rachel", "123", null, "789", function(user) {
			expect(user).equals(false)
			done()
		})
    })
    it("should not create a user whose id_token is null", function(done) {
		User.create("rachel@gmail.com", "Rachel", "123", "456", null, function(user) {
			expect(user).equals(false)
			done()
		})
	})
})