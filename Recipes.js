const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  ingredients: { type: [String], required: true },
  preparation: { type: [String], required: true },
});

module.exports = mongoose.model('Recipe', recipeSchema);
