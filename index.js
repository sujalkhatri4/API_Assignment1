//import express
const express = require('express')
const  bodyParser = require('body parser');


//express app inistialize
const app =express();

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