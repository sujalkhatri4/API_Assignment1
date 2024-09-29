// File: recipeController.js
// Student’s Name: Sujal
// StudentID: 200598524
// Date: 29 September

const Recipe = require('../models/recipeModel');

/**
 *  recipes from the database.
 * @param {Object} req - request object.
 * @param {Object} res - response object.
 * @returns {Promise<void>} -  resolves when the response is sent.
 */
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({}); 
    res.json(recipes); 
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving recipes', error }); // errors
  }
};
