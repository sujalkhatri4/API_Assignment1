//Student’s Name: Sujal
// StudentID: 200598524@student.georgianc.on.ca
// Date: 29 September


//import express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const InitiateMongoServer = require('./db');

//import routes
const recipeRoutes = require('./routes/recipes');

//Initialize MongoDB server Conection 
InitiateMongoServer();
//express app inistialize
const app =express();

//set the port
const  port = 3001;

//Midleware to parser json body
app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended:true}));




//define a route
app.get('/',(req,res)=>{
    res.send('Welcome to my API ASSIGNMENT')
})

//  recipes routes
app.use('/api/recipes', recipesRouter);

// start the server
app.listen(port,()=>{
    console.log(`the server is running on http://localhost:${port}`)
});