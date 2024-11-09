const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipes');

// Add a new recipe
router.post('/', async (req, res) => {
  try {
    const { name, category, ingredients, preparation } = req.body;
    const newRecipe = new Recipe({ name, category, ingredients, preparation });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add recipe' });
  }
});

// Get recipes by category
router.get('/:category', async (req, res) => {
  try {
    const category = req.params.category.toLowerCase();
    const recipes = await Recipe.find({ category });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching recipes by category' });
  }
});

// Search recipes by ingredients within a category
router.post('/search', async (req, res) => {
  try {
    const { category, ingredients } = req.body;
    const ingredientsArray = ingredients.map((ingredient) => ingredient.trim().toLowerCase());

    const recipes = await Recipe.find({ category });
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) => ingredientsArray.includes(ingredient.toLowerCase()))
    );

    res.json(filteredRecipes);
  } catch (error) {
    res.status(500).json({ error: 'Error searching recipes by ingredients' });
  }
});

module.exports = router;
