// File: index.js
// Student’s Name: Sujal
// StudentID: 200598524
// Date: 29 September

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

//MongoDb Atlas connection string
const mongoURI='mongodb+srv://sujalkhatri411:sujalapi@recipeapi.ngdmz.mongodb.net/'

//Connect to mongo Db Atlas
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', error);
  });

  
//Midleware to parser json body
app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended:true}));

// Define routes for recipes
app.use('/api/recipes', recipeRoutes);

//set the port
const  port = 3001;

// start the server
app.listen(port,()=>{
    console.log(`the server is running on http://localhost:${port}`)
});