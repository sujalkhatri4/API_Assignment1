// File: recipeRoutes.js
// Student’s Name: Sujal
// StudentID: 200598524
// Date: 29 September

const express = require('express');
const { getAllRecipes } = require('../controllers/recipeController');

const router = express.Router();

/**
 * Route to get all recipes.
 * @route GET /api/recipes
 * @returns {Array} - An array of recipe objects.
 */
router.get('/', getAllRecipes); // Route for fetching all recipes

module.exports = router;
