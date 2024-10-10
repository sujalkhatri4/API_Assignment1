//Student’s Name: Sujal
// StudentID: 200598524@student.georgianc.on.ca
// Date: 29 September

// routes/recipes.js
const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/RecipesController');

router.get('/', recipeController.GetRecipes);

module.exports = router;