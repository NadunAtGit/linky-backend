const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  profilePicUrl: {
    type: String,
    required: true,
  },
  linkTreeUrl: {
    type: String,
  unique: true,
  sparse: true, // Optional, doesn't require uniqueness when null
  default: null,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
