const User = require('../../user')
const expect = require('chai').expect 

describe("Tests to test creation of users", function() {
	it("create a new user with email'rachel@gmail.com', name 'Rachel', userId '123', expireTime '456', id_Token '789'", function(done) {
		var id = 1
		User.remove(id)
		.then( u => {
			User.create(1, 'rachel@gmail.com',"Rachel", 123, 456, '789', function(user) {
				expect(user).to.not.equal(false)
				expect(user.id).equals(1)
				expect(user.email).equals('rachel@gmail.com')
				expect(user.name).equals("Rachel")
				expect(user.userId).equals(123)	
				expect(user.expireTime).equals(456)
				expect(user.id_token).equals('789')	
				done()
			})
		})
		.catch( error => {
			assert(false)
			done() 
		}) 
	})
	it("should find user with id and return the user", function(done) {
		var id = 1
		User.remove(id)
		.then( u => {
			User.create(1, 'rachel@gmail.com', "Rachel", 123, 456, "789", function(user) {
				expect(user).to.not.equal(false)
				User.find(user.id)
				.then ( user => {
					expect(user.name).equals("Rachel")
					done()	
				})
			})
		})
	})
	it("should search for user with id and not find, returning false", function(done) {
		var id = 1
		User.remove(id)
		.then( u => {
			console.log("Removed")
			
			return User.find(id)

		})
		.then( user => {
			expect(user).equals(false)
			done()
		})
		.catch( e => {
			expect(e).equals(false)
			done()
		})
	})
	it("should remove user", function(done) {
		User.create(1, 'rachel@gmail.com', "Rachel", 123, 456, "789", function(user) {
			User.remove(1)
			.then( success => {
				expect(success).equals(1)
				done()
			})
		})
	})
	it("should not remove a user that doesn't exist ", function(done) {
		User.remove(10)
		.then(success => {
				expect(success).equals(0)
				done()
		})
	})
	it("should not create a user whose id is null", function(done) {
		User.create(null, 'rachel@gmail.com', "Rachel", 123, 456, "789", function(user) {
			expect(user).equals(false)
			done()
		})
  })
	it("should not create a user whose email is null", function(done) {
		User.create(1, null, "Rachel", 123, 456, "789", function(user) {
			expect(user).equals(false)
			done()
		})
  })
  it("should not create a user whose expireTime is negative", function(done) {
		User.create(1, "rachel@gmail.com", "Rachel", 123, -12, "789", function(user) {
			expect(user).equals(false)
			done()
		})
  })
  it("should not create a user whose userId is null", function(done) {
		User.create(1, "rachel@gmail.com", "Rachel", null, 456, "789", function(user) {
			expect(user).equals(false)
			done()
		})
    })
  it("should not create a user whose expireTime is null", function(done) {
		User.create(1, "rachel@gmail.com", "Rachel", 123, null, "789", function(user) {
			expect(user).equals(false)
			done()
		})
  })
  it("should not create a user whose id_token is null", function(done) {
		User.create(1, "rachel@gmail.com", "Rachel", 123, 456, null, function(user) {
			expect(user).equals(false)
			done()
		})
	}) 
	it("should not create a user whose email is not a valid email", function(done) {
		User.create(1, "notvalidemail", "Rachel", "123", "456", "789", function(user) {
			expect(user).equals(false)
			done()
		})
	})
	it("should not create a user whose id is not unique", function(done) {
		User.create(1, "rachel@gmail.com", "Rachel", 123, 456, '789', function(user) {
			User.create(1, "michael@gmail.com", "Rachel", 124, 456, '788', function(user) {
				expect(user).equals(false)
				done()
			})
		})
	})
	it("should not create a user whose email is not unique", function(done) {
		User.create(1, "mccoog@gmail.com", "Rachel", 123, 456, '789', function(user) {
			User.create(2, "mccoog@gmail.com", "Rachel", 123, 456, '789', function(user) {
				expect(user).equals(false)
				done()
			})
		})
	})
	it("should not create a user whose userId is not unique", function(done) {
		User.create(1, "rachel@gmail.com", "Rachel", 123, 456, '789', function(user) {
			User.create(2, "michael@gmail.com", "Rachel", 123, 456, '788', function(user) {
				expect(user).equals(false)
				done()
			})
		})
	})
	it("should not create a user whose id_token is not unique", function(done) {
		User.create(1, "rachel@gmail.com", "Rachel", 123, 456, '789', function(user) {
			User.create(2, "michael@gmail.com", "Mike", 124, 456, '789', function(user) {
				expect(user).equals(false)
				done()
			})
		})
	})
	it("should not create a user whose name is longer than 200 characters", function(done) {
		User.create(1, "michael@gmail.com", "MikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMike", 124, 456, '789', function(user) {
			expect(user).equals(false)
			done()
		})
	})
	it("should not create a user whose email is longer than 254 characters", function(done) {
		User.create(1, "MikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMikeMike@gmail.com", "Mike", 124, 456, '789', function(user) {
			expect(user).equals(false)
			done()
		})
	})
})