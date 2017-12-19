var methods = {
	printHello: function(req, res) {
		return res.send("Hello Rachel!");
	},
	printName: function(req, res) {
		return res.send(req.params.name)
	}
};

exports.data = methods; 