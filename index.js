//import express
const express = require('express')
const  bodyParser = require('body-parser');
const mongoose = require('mongoose');


//express app inistialize
const app =express();

//Connect to mongo Db Atlas
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

//MongoDb Atlas connection string
const mongoURI='mongodb+srv://sujalkhatri411:sujalapi@recipeapi.ngdmz.mongodb.net/'

//Midleware to parser json body
app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended:true}));

//define a route
app.get('/',(req,res)=>{
    res.send('Welcome to my API ASSIGNMENT')
})

//set the port
const  port = 3000;

// start the server
app.listen(port,()=>{
    console.log(`the server is running on http://localhost:${port}`)
});