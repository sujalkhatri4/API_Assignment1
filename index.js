//Student’s Name: Sujal
// StudentID: 200598524@student.georgianc.on.ca
// Date: 29 September


//import express
const express = require('express')
const  bodyParser = require('body-parser');
const mongoose = require('mongoose');
const recipesRouter = require('./routes/recipes'); 
const dotenv= require('dotenv');
const fs = require('fs');
const path = require('path');
//Load environment variables from config.env
dotenv.config({path:'./config.env'});

//Initialize MongoDB server Conection 
const InitiateMongoServer = require('./db');
InitiateMongoServer();

//Read data from movies.json
try{
const data = JSON.parse(fs.readFileSync('./movies.json','utf-8'));
console.log(data);
}
catch(e){
    console.log('error reading or parsing movies.json:',e);
}



//express app inistialize
const app =express();

//Midleware to parser json body
app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended:true}));



//MongoDb Atlas connection string
const mongoURI='mongodb+srv://sujalkhatri411:sujalapi@recipeapi.ngdmz.mongodb.net/'






//define a route
app.get('/',(req,res)=>{
    res.send('Welcome to my API ASSIGNMENT')
})

//  recipes routes
app.use('/api/recipes', recipesRouter);


//set the port
const  port = 3001;

// start the server
app.listen(port,()=>{
    console.log(`the server is running on http://localhost:${port}`)
});