const models = require("./db/models")
const User = models.User
const Sequelize = require("sequelize")

module.exports = {
	create: function(email, name, userId, expireTime, id_Token, callback) {
		if (email == null || name == null || userId == null || expireTime == null || id_Token == null || expireTime < 0) {
			callback(false)
			return
		} else {
			User.build({
				email: email, 
                name: name,
                userId: userId,
                expireTime: expireTime,
                id_Token: id_Token
			}).save()
			.then(user => {
				callback(user)
			})
			.catch(Sequelize.ValidationError, error => {
				callback(false)
			})
			.catch(error => {
				throw error
			})
		}
	},
	find: function(userId){
		//find a user based on their user id 
	},
	findOrCreate: function(userId){
		// if user is found - return it
		// if user is not found - create a new user with that id
	}
}