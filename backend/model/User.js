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
    type:String,
    required:true
  },
  email:{
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  refreshtoken: {
    type: String,
  },
  flashcard_ids: {
    numbers: [Number]
  }
});

const User = model('User', userSchema);

module.exports = User;