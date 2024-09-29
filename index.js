//Student’s Name: Sujal
// StudentID: 200598524@student.georgianc.on.ca
// Date: 29 September


//import express
const express = require('express')
const  bodyParser = require('body-parser');
const mongoose = require('mongoose');


//express app inistialize
const app =express();



//MongoDb Atlas connection string
const mongoURI='mongodb+srv://sujalkhatri411:sujalapi@recipeapi.ngdmz.mongodb.net/'

//Connect to mongo Db Atlas
// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });



//Midleware to parser json body
app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended:true}));

//define a route
app.get('/',(req,res)=>{
    res.send('Welcome to my API ASSIGNMENT')
})

// Use recipes routes
app.use('/api/recipes', recipesRouter);


//set the port
const  port = 3001;

// start the server
app.listen(port,()=>{
    console.log(`the server is running on http://localhost:${port}`)
});