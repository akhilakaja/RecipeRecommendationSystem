const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const Recipe = require('./models/Recipes');

const recipes = [
  {
    _id: new ObjectId('672cdca1f30ae2114886b01e'),
    name: 'Caesar Salad',
    category: 'salads',
    ingredients: ['lettuce', 'croutons', 'parmesan', 'Caesar dressing'],
    preparation: [
      'Wash and chop the lettuce into bite-sized pieces.',
      'Combine the chopped lettuce with croutons and grated parmesan.',
      'Drizzle Caesar dressing over the salad and toss well before serving.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b01f'),
    name: 'Greek Salad',
    category: 'salads',
    ingredients: ['tomato', 'cucumber', 'feta', 'olive', 'onion'],
    preparation: [
      'Chop the tomatoes, cucumber, and onion into bite-sized pieces.',
      'Combine the chopped vegetables with olives and cubed feta.',
      'Drizzle with olive oil, season with salt, and serve chilled.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b020'),
    name: 'Pancakes',
    category: 'breakfast',
    ingredients: ['flour', 'eggs', 'milk', 'sugar', 'baking powder'],
    preparation: [
      'Mix flour, sugar, and baking powder.',
      'Whisk eggs and milk.',
      'Combine and cook on a pan until golden.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b021'),
    name: 'Scrambled Eggs',
    category: 'breakfast',
    ingredients: ['eggs', 'milk', 'butter', 'salt'],
    preparation: [
      'Beat eggs with milk and salt.',
      'Melt butter in a pan and cook the eggs until softly set.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b022'),
    name: 'Masala Dosa',
    category: 'breakfast',
    ingredients: ['rice', 'urad dal', 'potato', 'onion', 'spices'],
    preparation: [
      'Soak rice and urad dal, grind to a batter.',
      'Ferment the batter, cook potatoes with spices for filling.',
      'Spread batter, add filling, and fold dosa.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b023'),
    name: 'Upma',
    category: 'breakfast',
    ingredients: ['semolina', 'onion', 'mustard seeds', 'vegetables', 'water'],
    preparation: [
      'Sauté mustard seeds and onions, add vegetables.',
      'Add semolina and water, cook until thickened.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b024'),
    name: 'Idli',
    category: 'breakfast',
    ingredients: ['rice', 'urad dal', 'salt'],
    preparation: [
      'Soak rice and urad dal, grind to a batter.',
      'Ferment, pour into molds, and steam until cooked.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b025'),
    name: 'Bruschetta',
    category: 'appetizers',
    ingredients: ['bread', 'tomato', 'garlic', 'basil', 'olive oil'],
    preparation: [
      'Toast bread slices.',
      'Top with tomatoes, garlic, basil, and olive oil mixture.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b026'),
    name: 'Stuffed Mushrooms',
    category: 'appetizers',
    ingredients: ['mushrooms', 'cheese', 'breadcrumbs', 'garlic'],
    preparation: [
      'Remove mushroom stems and mix with cheese, breadcrumbs, and garlic.',
      'Stuff mushroom caps and bake until golden.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b027'),
    name: 'Paneer Tikka',
    category: 'appetizers',
    ingredients: ['paneer', 'yogurt', 'spices', 'bell peppers', 'onion'],
    preparation: [
      'Marinate paneer with spices and yogurt, skewer with veggies, and grill.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b028'),
    name: 'Aloo Tikki',
    category: 'appetizers',
    ingredients: ['potato', 'peas', 'spices', 'breadcrumbs'],
    preparation: [
      'Mix mashed potatoes and spices, shape into patties, coat with breadcrumbs, and fry.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b029'),
    name: 'Tomato Soup',
    category: 'soups',
    ingredients: ['tomato', 'onion', 'garlic', 'broth', 'cream'],
    preparation: [
      'Sauté onion and garlic, add tomatoes and broth, simmer, blend, and add cream.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b02a'),
    name: 'Chicken Soup',
    category: 'soups',
    ingredients: ['chicken', 'carrot', 'celery', 'onion', 'broth'],
    preparation: [
      'Sauté onions, carrots, and celery, add chicken and broth, simmer until chicken is tender.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b02b'),
    name: 'Chocolate Cake',
    category: 'desserts',
    ingredients: ['flour', 'sugar', 'cocoa', 'butter', 'eggs'],
    preparation: [
      'Mix ingredients, pour into pan, and bake until set.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b02c'),
    name: 'Apple Pie',
    category: 'desserts',
    ingredients: ['apple', 'flour', 'butter', 'sugar', 'cinnamon'],
    preparation: [
      'Make crust, fill with apples and spices, top with crust, and bake.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b02d'),
    name: 'Gulab Jamun',
    category: 'desserts',
    ingredients: ['milk powder', 'flour', 'sugar', 'rose water', 'oil'],
    preparation: [
      'Form dough, shape into balls, fry, and soak in sugar syrup.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b02e'),
    name: 'Mango Lassi',
    category: 'beverages',
    ingredients: ['mango', 'yogurt', 'sugar', 'milk'],
    preparation: [
      'Blend mango, yogurt, sugar, and milk until smooth.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b02f'),
    name: 'Masala Chai',
    category: 'beverages',
    ingredients: ['tea leaves', 'milk', 'spices', 'sugar'],
    preparation: [
      'Boil water with spices, add tea, simmer, strain, and add milk.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b030'),
    name: 'Lemonade',
    category: 'beverages',
    ingredients: ['lemon', 'water', 'sugar', 'mint'],
    preparation: [
      'Mix lemon juice, water, and sugar, and serve with mint.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b031'),
    name: 'Fruit Smoothie',
    category: 'beverages',
    ingredients: ['banana', 'berries', 'yogurt', 'honey'],
    preparation: [
      'Blend banana, berries, yogurt, and honey until smooth.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b032'),
    name: 'Biryani',
    category: 'mainDishes',
    ingredients: ['rice', 'chicken', 'spices', 'yogurt', 'onion'],
    preparation: [
      'Marinate chicken with yogurt and spices, layer with rice, and cook until done.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b033'),
    name: 'Palak Paneer',
    category: 'mainDishes',
    ingredients: ['spinach', 'paneer', 'onion', 'spices'],
    preparation: [
      'Blend spinach, cook with spices, add paneer, and simmer.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b034'),
    name: 'Chole Bhature',
    category: 'mainDishes',
    ingredients: ['chickpeas', 'flour', 'spices'],
    preparation: [
      'Cook chickpeas with spices, make dough, fry, and serve with chickpeas.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b035'),
    name: 'Samosa',
    category: 'snacks',
    ingredients: ['potatoes', 'peas', 'flour', 'spices'],
    preparation: [
      'Make dough, fill with potatoes, shape, and fry until golden.'
    ]
  },
  {
    _id: new ObjectId('672cdca1f30ae2114886b036'),
    name: 'Pakoras',
    category: 'snacks',
    ingredients: ['gram flour', 'potatoes', 'onions', 'spices'],
    preparation: [
      'Dip sliced vegetables in batter and fry until golden.'
    ]
  }
];

mongoose.connect('mongodb://localhost:27017/recipesDB')
  .then(() => {
    console.log('Connected to MongoDB');
    return Recipe.deleteMany({});  // Clear existing data
  })
  .then(() => {
    console.log('Old recipes removed');
    return Recipe.insertMany(recipes);
  })
  .then(() => {
    console.log('Database seeded with 25 recipes');
    mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  });
