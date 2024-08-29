const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password:{
    String
  },
  email:{
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const User = model('User', userSchema);

module.exports = User;