const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const PORT = 5005;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/recipesDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.use('/api/recipes', recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
