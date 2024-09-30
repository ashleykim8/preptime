const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const flashCardsSchema = new Schema({
    definitions:[{
        id: Number,
        question: String,
        answer:String
    }],
    id:{
        type: Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
});

const Flashcards = model('Flashcards', flashCardsSchema);

module.exports = Flashcards;