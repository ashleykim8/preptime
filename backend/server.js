const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ogolden:Kf4DBkg5r8mZWi1p@projectcluster.2m7j1.mongodb.net/?retryWrites=true&w=majority&appName=ProjectCluster"
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const usersRouter = require('./routes/user');
const flashcardsRouter = require('./routes/flashcards');

app.use('/api/users', usersRouter);
app.use('/api/flashcards', flashcardsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});