// File: recipeController.js
// Student’s Name: Sujal
// StudentID: 200598524@student.georgianc.on.ca
// Date: 29 September

const Recipe = require('../models/recipe');

/**
 * Fetches all recipes from the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.json(recipes); // Respond with all recipes
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving recipes', error });
  }
};
