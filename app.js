const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const PORT = 5006;

// Enable CORS
app.use(cors());

// Parse JSON request bodies (replaces bodyParser.json())
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/recipesDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/recipes', recipeRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
