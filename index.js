//import express
const express = require('express')
const  bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables
const recipeRoutes = require('./routes/recipeRoutes');


//express app inistialize
const app =express();



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

// Define routes
app.use('/api/recipes', recipeRoutes); // Use recipe routes


//set the port
const  port = 3001;

// start the server
app.listen(port,()=>{
    console.log(`the server is running on http://localhost:${port}`)
});