// File: seedFromExcel.js
// Student’s Name: Sujal
// StudentID: 200598524
// Date: 29 September

const mongoose = require('mongoose');
const xlsx = require('xlsx'); 
require('dotenv').config(); 
const Recipe = require('./src/models/recipeModel'); 

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

// Function to read data from the Excel file
const readExcelFile = (filePath) => {
  const workbook = xlsx.readFile(filePath); 
  const sheetName = workbook.SheetNames[0]; 
  const worksheet = workbook.Sheets[sheetName]; 
  const data = xlsx.utils.sheet_to_json(worksheet); // Convert the sheet to JSON
  return data; // Return the JSON data
};

const seedDatabase = async () => {
  await connectDB(); // Connect to the database

  const recipes = readExcelFile('Recipes.xlsx'); 
  // Clear existing recipes
  await Recipe.deleteMany({}); //  existing recipes
  
  // Insert new recipes
  await Recipe.insertMany(recipes); 
  console.log('Database seeded with recipes from Excel!'); 

  mongoose.connection.close(); // Close the database connection
};

// Execute the seeding function and handle any errors
seedDatabase().catch(err => console.error(err));
