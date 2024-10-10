// Student’s Name: Sujal
// StudentID: 200598524@student.georgianc.on.ca
// Date: 29 September

require('dotenv').config();

//  express 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//  MongoDB URI for debugging
console.log('MongoDB URI:', process.env.MONGO_URI); 

//  MongoDB connection function
const InitiateMongoServer = require('./db');

// Import routes
const recipesRouter = require('./src/routes/recipes');

// Initialize MongoDB server connection 
InitiateMongoServer();

// Initialize express app
const app = express();

// Set the port
const port = 3001;

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route
app.get('/', (req, res) => {
    res.send('Welcome to my API ASSIGNMENT');
});

// Recipes routes
app.use('/api/recipes', recipesRouter);

// Start the server
app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});
