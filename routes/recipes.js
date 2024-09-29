//Student’s Name: Sujal
// StudentID: 200598524@student.georgianc.on.ca
// Date: 29 September



// routes/recipes.js
const express = require('express');
const Recipe = require('../models/recipe');
const router = express.Router();

/**
 * Get all recipes
 */
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

/**
 * Create a new recipe
 */
router.post('/', async (req, res) => {
    const recipe = new Recipe(req.body);
    try {
        const savedRecipe = await recipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
