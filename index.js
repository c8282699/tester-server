var mongoose = require('mongoose');
if (! process.env.MONGODB_URI) {
  console.log('MONGODB_URI config variable is missing. Try running "source env.sh"');
  process.exit(1);
}
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', console.error);
 import models from './models/models.js';
 var User = models.User;