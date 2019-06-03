const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  nick: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('User', userSchema);