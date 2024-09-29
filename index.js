//import express
const express = require('express')

//express app inistialize
const app =express();

//set the port
const  port = 3000;

// start the server
app.listen(port,()=>{
    console.log(`the server is running on http://localhost:${port}`)
});