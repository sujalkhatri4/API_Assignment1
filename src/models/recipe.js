// models/recipe.js
// Student’s Name: Sujal
// StudentID: 200598524@student.georgianc.on.ca
// Date: 29 September


const mongoose = require('mongoose');

//  the recipe schema
const recipeSchema = new mongoose.Schema({
    recipeName: { type: String, required: true },
    ingredients0: { type: [String], required: true },
    ingredients1: { type: [String], required: true },
    ingredients2: { type: [String], required: true },
    ingredients3: { type: [String], required: true },
    ingredients4: { type: [String], required: true },
    cookingTime: { type: Number, required: true },
    difficulty: { type: String, required: true },
    cuisine: { type: String, required: true },
    description: { type: String, required: true },
    photoLink: { type: String, required: true },
    averageRating: { type: Number, default: 0 },
});

const Recipe = mongoose.model('recipes', recipeSchema);

// Export the model
module.exports = Recipe;
