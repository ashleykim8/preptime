const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const {cookieJwtAuth} = require(".\middleware\cookieJwtAuth.js")
const app = express();

dotenv.config();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
mongoose.connect("mongodb+srv://ogolden:Kf4DBkg5r8mZWi1p@projectcluster.2m7j1.mongodb.net/?retryWrites=true&w=majority&appName=ProjectCluster"
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const usersRouter = require('./routes/user');
const flashcardsRouter = require('./routes/flashcards');

app.use('/api/users', usersRouter);
app.use('/api/flashcards', cookieJwtAuth, flashcardsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});