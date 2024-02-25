var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  accountNumber: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true,
  },
  identityNumber: {
    type: String,
    required: true,
  }
}, { collection: 'user'});

module.exports = mongoose.model('user', userSchema);