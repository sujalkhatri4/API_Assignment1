// File: recipeModel.js
// Student’s Name: Sujal
// StudentID: 200598524
// Date: 29 September

const mongoose = require('mongoose');

// Define the recipe schema
const recipeSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  recipeName: { type: String, required: true },
  ingredients0: { type: [String], required: true },
  ingredients1: { type: String, required: true },
  ingredients2: { type: String, required: true },
  ingredients3: { type: String, required: true },
  ingredients4: { type: String, required: true },
  ingredients5: { type: Number, required: true },
  cookingTime: { type: String, required: true },
  difficulty: { type: String, required: true },
  cuisine: { type: String, required: true },
  description: { type: String, required: true },
  photoLink: { type: String, required: true },
  averageRating: { type: Number, required: true },
});

//  Recipe model
const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
