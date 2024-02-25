var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, { collection: 'auth'});

module.exports = mongoose.model('auth', authSchema);