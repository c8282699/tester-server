var mongoose = require('mongoose');
var connect = process.env.MONGODB_URI;
mongoose.connect(connect);

var userSchema = new mongoose.Schema ({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
});

var User = mongoose.model('User', userSchema);

export default {User}