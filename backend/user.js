const models = require("./db/models")
const Sequelize = require("sequelize")
const User = models.User


module.exports = {
	create: function(id, email, name, userId, expireTime, id_token, callback) {
		if (id == null|| email == null || name == null || userId == null || expireTime == null || id_token == null || expireTime < 0) {
			callback(false)
			return
		} else {
			User.build({
				id: id,
				email: email, 
                name: name,
                userId: userId,
                expireTime: expireTime,
                id_token: id_token
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
	find: function(id){
		return new Promise((resolve, reject) => {
			if (id < 0) {
				reject("id must be positive.");
			}
			User.findById(id)
			.then(user => {
				if (user == null) {
					resolve(false)
				} else {
					resolve(user)
				}
			})
			.catch(e => {
				reject(e)
			})
		})
	},
	remove: function(id){
		return User.destroy({
			where: {
				id: id
			}
		})
	}
}
