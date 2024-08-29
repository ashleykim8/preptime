const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const flashCardSchema = new Schema({
    definitions:{
        type: Map,
        of: String
    },
    id:{
        type: Number,
        required:true
    }
});

const Flashcard = model('Flashcard', flashCardSchema);

module.exports = Flashcard;