const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const Recipe = require('./models/Recipes');
const recipes = [
  // Breakfast
  { name: 'Poha', category: 'breakfast', ingredients: ['flattened rice', 'onion', 'potato', 'mustard seeds'], preparation: ['Soak flattened rice, sauté with onions, potatoes, and spices.'] },
  { name: 'Aloo Paratha', category: 'breakfast', ingredients: ['potato', 'wheat flour', 'spices'], preparation: ['Stuff dough with spiced potatoes and cook on a griddle.'] },
  { name: 'Masala Dosa', category: 'breakfast', ingredients: ['rice', 'urad dal', 'potato', 'onion'], preparation: ['Make dosa batter, cook with potato filling.'] },
  { name: 'Idli', category: 'breakfast', ingredients: ['rice', 'urad dal', 'salt'], preparation: ['Steam fermented batter in molds.'] },
  { name: 'Upma', category: 'breakfast', ingredients: ['semolina', 'vegetables', 'mustard seeds'], preparation: ['Cook semolina with vegetables and spices.'] },
  { name: 'Puri Bhaji', category: 'breakfast', ingredients: ['wheat flour', 'potato', 'spices'], preparation: ['Make puris and serve with spiced potato bhaji.'] },
  { name: 'Chole Bhature', category: 'breakfast', ingredients: ['chickpeas', 'flour', 'spices'], preparation: ['Serve spiced chickpeas with fried bread.'] },
  { name: 'Dhokla', category: 'breakfast', ingredients: ['gram flour', 'yogurt', 'spices'], preparation: ['Steam fermented batter and cut into pieces.'] },
  { name: 'Thepla', category: 'breakfast', ingredients: ['wheat flour', 'fenugreek leaves', 'spices'], preparation: ['Make dough with spices, cook on griddle.'] },
  { name: 'Methi Paratha', category: 'breakfast', ingredients: ['wheat flour', 'fenugreek leaves', 'spices'], preparation: ['Combine ingredients, roll into parathas, cook on griddle.'] },
  { name: 'Uttapam', category: 'breakfast', ingredients: ['rice', 'urad dal', 'onion', 'tomato'], preparation: ['Cook batter with vegetables on griddle.'] },
  { name: 'Pesarattu', category: 'breakfast', ingredients: ['green gram', 'onion', 'ginger'], preparation: ['Make dosa from green gram batter with onions.'] },
  { name: 'Pongal', category: 'breakfast', ingredients: ['rice', 'moong dal', 'peppercorns'], preparation: ['Cook rice and dal with spices.'] },
  { name: 'Sabudana Khichdi', category: 'breakfast', ingredients: ['tapioca pearls', 'peanuts', 'potato'], preparation: ['Cook soaked pearls with peanuts and potatoes.'] },
  { name: 'Vada', category: 'breakfast', ingredients: ['urad dal', 'spices'], preparation: ['Fry ground dal batter into fritters.'] },
  { name: 'Matar Kachori', category: 'breakfast', ingredients: ['flour', 'peas', 'spices'], preparation: ['Fill dough with spiced peas and fry.'] },
  { name: 'Besan Chilla', category: 'breakfast', ingredients: ['gram flour', 'spices', 'vegetables'], preparation: ['Cook batter with veggies on griddle.'] },
  { name: 'Bread Pakora', category: 'breakfast', ingredients: ['bread', 'gram flour', 'spices'], preparation: ['Batter bread slices with gram flour and fry.'] },
  { name: 'Rava Idli', category: 'breakfast', ingredients: ['semolina', 'yogurt', 'spices'], preparation: ['Steam batter in idli molds.'] },
  { name: 'Moong Dal Chilla', category: 'breakfast', ingredients: ['moong dal', 'spices'], preparation: ['Cook ground dal batter on a griddle.'] },

  // Main Dishes
  { name: 'Butter Chicken', category: 'mainDishes', ingredients: ['chicken', 'butter', 'tomato', 'cream'], preparation: ['Cook chicken in creamy tomato sauce.'] },
  { name: 'Biryani', category: 'mainDishes', ingredients: ['rice', 'chicken', 'spices', 'yogurt'], preparation: ['Layer marinated chicken with rice and cook.'] },
  { name: 'Paneer Butter Masala', category: 'mainDishes', ingredients: ['paneer', 'tomato', 'cream', 'spices'], preparation: ['Cook paneer in creamy tomato sauce.'] },
  { name: 'Chole', category: 'mainDishes', ingredients: ['chickpeas', 'tomato', 'onion', 'spices'], preparation: ['Cook chickpeas with spiced gravy.'] },
  { name: 'Dal Makhani', category: 'mainDishes', ingredients: ['urad dal', 'kidney beans', 'cream'], preparation: ['Simmer dal and beans with spices and cream.'] },
  { name: 'Palak Paneer', category: 'mainDishes', ingredients: ['paneer', 'spinach', 'spices'], preparation: ['Cook paneer in pureed spinach.'] },
  { name: 'Rajma', category: 'mainDishes', ingredients: ['kidney beans', 'tomato', 'spices'], preparation: ['Simmer beans with spiced gravy.'] },
  { name: 'Aloo Gobi', category: 'mainDishes', ingredients: ['potato', 'cauliflower', 'spices'], preparation: ['Cook potato and cauliflower with spices.'] },
  { name: 'Mutton Curry', category: 'mainDishes', ingredients: ['mutton', 'spices', 'yogurt'], preparation: ['Cook mutton in a spiced gravy.'] },
  { name: 'Fish Curry', category: 'mainDishes', ingredients: ['fish', 'coconut', 'spices'], preparation: ['Cook fish in a spiced coconut gravy.'] },
  { name: 'Baingan Bharta', category: 'mainDishes', ingredients: ['eggplant', 'tomato', 'onion'], preparation: ['Roast eggplant and cook with spices.'] },
  { name: 'Kadhi Pakora', category: 'mainDishes', ingredients: ['gram flour', 'yogurt', 'spices'], preparation: ['Cook gram flour dumplings in spiced yogurt.'] },
  { name: 'Malai Kofta', category: 'mainDishes', ingredients: ['paneer', 'potato', 'cream'], preparation: ['Cook paneer and potato balls in creamy gravy.'] },
  { name: 'Vegetable Korma', category: 'mainDishes', ingredients: ['mixed vegetables', 'coconut', 'spices'], preparation: ['Cook vegetables in a spiced coconut sauce.'] },
  { name: 'Chicken Tikka Masala', category: 'mainDishes', ingredients: ['chicken', 'tomato', 'cream', 'spices'], preparation: ['Cook marinated chicken in spiced sauce.'] },
  { name: 'Lamb Vindaloo', category: 'mainDishes', ingredients: ['lamb', 'vinegar', 'spices'], preparation: ['Cook lamb with vinegar and spices.'] },
  { name: 'Kofta Curry', category: 'mainDishes', ingredients: ['meatballs', 'spices', 'gravy'], preparation: ['Cook meatballs in spiced gravy.'] },
  { name: 'Bhindi Masala', category: 'mainDishes', ingredients: ['okra', 'onion', 'spices'], preparation: ['Cook okra with spices and onion.'] },
  { name: 'Jeera Aloo', category: 'mainDishes', ingredients: ['potato', 'cumin', 'spices'], preparation: ['Cook potato with cumin and spices.'] },
  { name: 'Egg Curry', category: 'mainDishes', ingredients: ['eggs', 'tomato', 'spices'], preparation: ['Cook boiled eggs in spiced gravy.'] },

  // Beverages
  { name: 'Masala Chai', category: 'beverages', ingredients: ['tea leaves', 'milk', 'spices', 'sugar'], preparation: ['Simmer tea with milk, spices, and sugar.'] },
  { name: 'Mango Lassi', category: 'beverages', ingredients: ['mango', 'yogurt', 'sugar', 'milk'], preparation: ['Blend mango with yogurt and sugar.'] },
  { name: 'Nimbu Pani', category: 'beverages', ingredients: ['lemon', 'water', 'sugar', 'salt'], preparation: ['Mix lemon juice with water, sugar, and salt.'] },
  { name: 'Thandai', category: 'beverages', ingredients: ['milk', 'almonds', 'spices', 'sugar'], preparation: ['Blend milk with almonds, spices, and sugar.'] },
  { name: 'Jaljeera', category: 'beverages', ingredients: ['cumin', 'mint', 'lemon'], preparation: ['Mix cumin, mint, and lemon with water.'] },
  { name: 'Aam Panna', category: 'beverages', ingredients: ['raw mango', 'mint', 'cumin'], preparation: ['Blend mango with mint and cumin.'] },
  { name: 'Falooda', category: 'beverages', ingredients: ['milk', 'rose syrup', 'vermicelli'], preparation: ['Layer milk with syrup and vermicelli.'] },
  { name: 'Badam Milk', category: 'beverages', ingredients: ['almonds', 'milk', 'sugar'], preparation: ['Blend almonds with milk and sugar.'] },
  { name: 'Coconut Water', category: 'beverages', ingredients: ['coconut water'], preparation: ['Serve chilled.'] },
  { name: 'Sugarcane Juice', category: 'beverages', ingredients: ['sugarcane'], preparation: ['Extract juice and serve chilled.'] },
  { name: 'Masala Buttermilk', category: 'beverages', ingredients: ['buttermilk', 'cumin', 'mint'], preparation: ['Mix buttermilk with cumin and mint.'] },
  { name: 'Ginger Lemon Tea', category: 'beverages', ingredients: ['ginger', 'lemon', 'tea'], preparation: ['Boil ginger with tea and lemon.'] },
  { name: 'Rose Milk', category: 'beverages', ingredients: ['milk', 'rose syrup'], preparation: ['Mix milk with rose syrup.'] },
  { name: 'Kesar Pista Lassi', category: 'beverages', ingredients: ['yogurt', 'saffron', 'pistachios'], preparation: ['Blend yogurt with saffron and pistachios.'] },
  { name: 'Mint Lassi', category: 'beverages', ingredients: ['yogurt', 'mint', 'salt'], preparation: ['Blend yogurt with mint and salt.'] },
  { name: 'Pineapple Juice', category: 'beverages', ingredients: ['pineapple'], preparation: ['Juice the pineapple.'] },
  { name: 'Carrot Kanji', category: 'beverages', ingredients: ['carrot', 'mustard seeds', 'water'], preparation: ['Ferment carrots with mustard.'] },
  { name: 'Bael Sharbat', category: 'beverages', ingredients: ['bael fruit', 'water'], preparation: ['Mix bael pulp with water.'] },
  { name: 'Kokum Sherbet', category: 'beverages', ingredients: ['kokum', 'sugar', 'cumin'], preparation: ['Blend kokum with sugar and cumin.'] },
  { name: 'Apple Cider', category: 'beverages', ingredients: ['apple', 'cinnamon'], preparation: ['Boil apples with cinnamon and strain.'] },

  // Snacks
  { name: 'Pani Puri', category: 'snacks', ingredients: ['puri', 'potato', 'tamarind water'], preparation: ['Fill puris with potato and tamarind water.'] },
  { name: 'Bhel Puri', category: 'snacks', ingredients: ['puffed rice', 'sev', 'chutneys'], preparation: ['Mix ingredients and serve.'] },
  { name: 'Aloo Chaat', category: 'snacks', ingredients: ['potato', 'chutney', 'spices'], preparation: ['Toss fried potatoes with chutney and spices.'] },
  { name: 'Sev Puri', category: 'snacks', ingredients: ['puri', 'potato', 'chutneys'], preparation: ['Top puris with potatoes and chutneys.'] },
  { name: 'Chana Jor Garam', category: 'snacks', ingredients: ['black gram', 'spices'], preparation: ['Mix roasted gram with spices.'] },
  { name: 'Dahi Vada', category: 'snacks', ingredients: ['lentils', 'yogurt', 'chutneys'], preparation: ['Serve fried vada in yogurt with chutneys.'] },
  { name: 'Kachori', category: 'snacks', ingredients: ['flour', 'spices'], preparation: ['Fill dough with spiced mixture and fry.'] },
  { name: 'Aloo Bonda', category: 'snacks', ingredients: ['potato', 'gram flour'], preparation: ['Batter potato balls and fry.'] },
  { name: 'Pakora', category: 'snacks', ingredients: ['vegetables', 'gram flour'], preparation: ['Batter vegetables and fry.'] },
  { name: 'Bread Roll', category: 'snacks', ingredients: ['bread', 'potato', 'spices'], preparation: ['Fill bread with potato, roll, and fry.'] },
  { name: 'Vada Pav', category: 'snacks', ingredients: ['bun', 'potato fritter', 'chutneys'], preparation: ['Serve fritter in bun with chutney.'] },
  { name: 'Mirchi Bajji', category: 'snacks', ingredients: ['chili', 'gram flour'], preparation: ['Batter chili peppers and fry.'] },
  { name: 'Murmura', category: 'snacks', ingredients: ['puffed rice', 'spices'], preparation: ['Mix puffed rice with spices.'] },
  { name: 'Samosa Chaat', category: 'snacks', ingredients: ['samosa', 'yogurt', 'chutneys'], preparation: ['Top samosa with yogurt and chutneys.'] },
  { name: 'Bhakarwadi', category: 'snacks', ingredients: ['flour', 'spices'], preparation: ['Roll spiced dough, slice, and fry.'] },
  { name: 'Papdi Chaat', category: 'snacks', ingredients: ['papdi', 'potato', 'yogurt', 'chutneys'], preparation: ['Top papdi with potato, yogurt, and chutneys.'] },
  { name: 'Chakli', category: 'snacks', ingredients: ['rice flour', 'spices'], preparation: ['Shape spiced dough and fry.'] },
  { name: 'Mathri', category: 'snacks', ingredients: ['flour', 'spices'], preparation: ['Shape spiced dough and fry.'] },
  { name: 'Methi Na Gota', category: 'snacks', ingredients: ['fenugreek', 'gram flour'], preparation: ['Batter fenugreek leaves and fry.'] },
  { name: 'Dhokla Sandwich', category: 'snacks', ingredients: ['gram flour', 'spices'], preparation: ['Layer dhokla with chutney.'] },
  // Soups
  { name: 'Tomato Shorba', category: 'soups', ingredients: ['tomato', 'spices', 'broth'], preparation: ['Cook tomatoes with spices and blend.'] },
  { name: 'Mulligatawny Soup', category: 'soups', ingredients: ['lentils', 'chicken', 'curry powder'], preparation: ['Cook lentils and chicken with spices, blend and serve.'] },
  { name: 'Dal Shorba', category: 'soups', ingredients: ['lentils', 'spices', 'onion'], preparation: ['Cook lentils with spices, blend and serve.'] },
  { name: 'Palak Soup', category: 'soups', ingredients: ['spinach', 'spices', 'cream'], preparation: ['Cook spinach with spices, blend and add cream.'] },
  { name: 'Vegetable Soup', category: 'soups', ingredients: ['mixed vegetables', 'spices', 'broth'], preparation: ['Cook veggies with broth and spices.'] },
  { name: 'Lemon Coriander Soup', category: 'soups', ingredients: ['lemon', 'coriander', 'broth'], preparation: ['Simmer broth with coriander and lemon.'] },
  { name: 'Chicken Shorba', category: 'soups', ingredients: ['chicken', 'spices', 'broth'], preparation: ['Simmer chicken in spices and broth.'] },
  { name: 'Mushroom Soup', category: 'soups', ingredients: ['mushroom', 'cream', 'broth'], preparation: ['Cook mushrooms with broth, blend, add cream.'] },
  { name: 'Pumpkin Soup', category: 'soups', ingredients: ['pumpkin', 'spices', 'cream'], preparation: ['Cook pumpkin with spices, blend and add cream.'] },
  { name: 'Sweet Corn Soup', category: 'soups', ingredients: ['corn', 'vegetables', 'broth'], preparation: ['Simmer corn and veggies in broth.'] },
  { name: 'Rasam', category: 'soups', ingredients: ['tomato', 'spices', 'tamarind'], preparation: ['Simmer tomatoes with spices and tamarind.'] },
  { name: 'Hot and Sour Soup', category: 'soups', ingredients: ['vegetables', 'vinegar', 'spices'], preparation: ['Cook vegetables with vinegar and spices.'] },
  { name: 'Dal Palak Soup', category: 'soups', ingredients: ['lentils', 'spinach', 'spices'], preparation: ['Cook lentils with spinach and spices.'] },
  { name: 'Carrot Soup', category: 'soups', ingredients: ['carrot', 'ginger', 'cream'], preparation: ['Cook carrots with ginger, blend, and add cream.'] },
  { name: 'Coconut Milk Soup', category: 'soups', ingredients: ['coconut milk', 'vegetables', 'spices'], preparation: ['Simmer coconut milk with vegetables.'] },
  { name: 'Tamatar Dhaniya Shorba', category: 'soups', ingredients: ['tomato', 'coriander', 'spices'], preparation: ['Simmer tomatoes with coriander and spices.'] },
  { name: 'Beetroot Soup', category: 'soups', ingredients: ['beetroot', 'spices', 'cream'], preparation: ['Cook beetroot with spices, blend, and add cream.'] },
  { name: 'Ginger Soup', category: 'soups', ingredients: ['ginger', 'spices', 'broth'], preparation: ['Simmer ginger in broth with spices.'] },
  { name: 'Mutton Yakhni', category: 'soups', ingredients: ['mutton', 'yogurt', 'spices'], preparation: ['Simmer mutton in yogurt-based broth with spices.'] },
  { name: 'Spicy Lentil Soup', category: 'soups', ingredients: ['lentils', 'spices', 'broth'], preparation: ['Cook lentils with spices and blend.'] },

  // Appetizers
  { name: 'Samosa', category: 'appetizers', ingredients: ['potatoes', 'peas', 'flour', 'spices'], preparation: ['Make dough, fill with spiced potatoes and peas, shape, and fry.'] },
  { name: 'Paneer Tikka', category: 'appetizers', ingredients: ['paneer', 'yogurt', 'spices', 'bell peppers'], preparation: ['Marinate paneer and veggies, then grill or bake.'] },
  { name: 'Aloo Tikki', category: 'appetizers', ingredients: ['potatoes', 'peas', 'spices', 'breadcrumbs'], preparation: ['Shape spiced potato mixture into patties, coat with breadcrumbs, and fry.'] },
  { name: 'Hara Bhara Kabab', category: 'appetizers', ingredients: ['spinach', 'peas', 'potato', 'spices'], preparation: ['Combine ingredients, shape into patties, and fry.'] },
  { name: 'Dahi Puri', category: 'appetizers', ingredients: ['puri', 'potato', 'yogurt', 'spices'], preparation: ['Fill puris with spiced potatoes, yogurt, and tamarind chutney.'] },
  { name: 'Prawn Koliwada', category: 'appetizers', ingredients: ['prawns', 'flour', 'spices'], preparation: ['Batter prawns with spices and fry.'] },
  { name: 'Onion Pakora', category: 'appetizers', ingredients: ['onion', 'gram flour', 'spices'], preparation: ['Batter onion slices and fry.'] },
  { name: 'Chicken Pakora', category: 'appetizers', ingredients: ['chicken', 'gram flour', 'spices'], preparation: ['Batter chicken pieces and fry.'] },
  { name: 'Rajma Galouti', category: 'appetizers', ingredients: ['rajma', 'spices', 'breadcrumbs'], preparation: ['Mash rajma with spices, shape into patties, and fry.'] },
  { name: 'Palak Chaat', category: 'appetizers', ingredients: ['spinach', 'yogurt', 'spices'], preparation: ['Fry spinach and serve with yogurt and chutneys.'] },
  { name: 'Mushroom Tikka', category: 'appetizers', ingredients: ['mushroom', 'yogurt', 'spices'], preparation: ['Marinate mushrooms with spices and grill.'] },
  { name: 'Chicken Seekh Kebab', category: 'appetizers', ingredients: ['chicken', 'spices'], preparation: ['Shape minced chicken onto skewers and grill.'] },
  { name: 'Fish Amritsari', category: 'appetizers', ingredients: ['fish', 'gram flour', 'spices'], preparation: ['Batter fish with spices and fry.'] },
  { name: 'Vegetable Spring Rolls', category: 'appetizers', ingredients: ['vegetables', 'spring roll wrappers', 'spices'], preparation: ['Fill wrappers with vegetables and fry.'] },
  { name: 'Mutton Shami Kebab', category: 'appetizers', ingredients: ['mutton', 'lentils', 'spices'], preparation: ['Shape mutton and lentils into patties and fry.'] },
  { name: 'Dhokla', category: 'appetizers', ingredients: ['gram flour', 'yogurt', 'spices'], preparation: ['Steam fermented batter, cut into pieces.'] },
  { name: 'Stuffed Mushroom', category: 'appetizers', ingredients: ['mushrooms', 'cheese', 'spices'], preparation: ['Stuff mushrooms with spiced cheese mixture and bake.'] },
  { name: 'Achari Paneer Tikka', category: 'appetizers', ingredients: ['paneer', 'pickle spices', 'yogurt'], preparation: ['Marinate paneer with spices and grill.'] },
  { name: 'Pav Bhaji', category: 'appetizers', ingredients: ['vegetables', 'spices', 'bread'], preparation: ['Cook spiced vegetables and serve with bread.'] },
  { name: 'Methi Malai Chicken Tikka', category: 'appetizers', ingredients: ['chicken', 'methi', 'cream'], preparation: ['Marinate chicken in methi and cream, then grill.'] },

  // Salads
  { name: 'Kachumber Salad', category: 'salads', ingredients: ['cucumber', 'tomato', 'onion', 'lemon'], preparation: ['Chop vegetables, mix with lemon juice and spices.'] },
  { name: 'Sprouted Moong Salad', category: 'salads', ingredients: ['sprouted moong', 'tomato', 'cucumber', 'lemon'], preparation: ['Mix sprouts with veggies and lemon juice.'] },
  { name: 'Paneer Salad', category: 'salads', ingredients: ['paneer', 'capsicum', 'onion', 'tomato'], preparation: ['Grill paneer and mix with vegetables.'] },
  { name: 'Mango Salad', category: 'salads', ingredients: ['raw mango', 'onion', 'mint'], preparation: ['Mix mango with onions, mint, and spices.'] },
  { name: 'Fruit Chaat', category: 'salads', ingredients: ['apple', 'banana', 'grapes', 'orange'], preparation: ['Mix chopped fruits with chaat masala.'] },
  { name: 'Carrot and Cucumber Salad', category: 'salads', ingredients: ['carrot', 'cucumber', 'lemon'], preparation: ['Mix grated carrot and cucumber with lemon juice.'] },
  { name: 'Beetroot Salad', category: 'salads', ingredients: ['beetroot', 'cucumber', 'tomato'], preparation: ['Mix beetroot with cucumber and tomato.'] },
  { name: 'Palak Chaat', category: 'salads', ingredients: ['spinach', 'yogurt', 'tamarind'], preparation: ['Fry spinach leaves, top with yogurt and tamarind chutney.'] },
  { name: 'Chana Salad', category: 'salads', ingredients: ['chickpeas', 'onion', 'tomato'], preparation: ['Mix chickpeas with onions, tomatoes, and spices.'] },
  { name: 'Aloo Chaat', category: 'salads', ingredients: ['potatoes', 'spices', 'lemon'], preparation: ['Fry potatoes and toss with spices and lemon.'] },
  { name: 'Corn Salad', category: 'salads', ingredients: ['corn', 'capsicum', 'tomato'], preparation: ['Mix corn with vegetables and spices.'] },
  { name: 'Rajma Salad', category: 'salads', ingredients: ['kidney beans', 'onion', 'tomato'], preparation: ['Mix kidney beans with veggies and spices.'] },
  { name: 'Pomegranate Raita', category: 'salads', ingredients: ['pomegranate', 'yogurt', 'cumin'], preparation: ['Mix pomegranate seeds with yogurt and spices.'] },
  { name: 'Vegetable Raita', category: 'salads', ingredients: ['yogurt', 'cucumber', 'carrot', 'tomato'], preparation: ['Mix chopped veggies with yogurt and spices.'] },
  { name: 'Dahi Bhalla', category: 'salads', ingredients: ['urad dal', 'yogurt', 'spices'], preparation: ['Serve vadas in yogurt topped with spices and chutneys.'] },
  { name: 'Cabbage Salad', category: 'salads', ingredients: ['cabbage', 'carrot', 'lemon'], preparation: ['Mix cabbage with carrots and lemon juice.'] },
  { name: 'Green Salad', category: 'salads', ingredients: ['lettuce', 'cucumber', 'lemon'], preparation: ['Mix greens with lemon juice.'] },
  { name: 'Sprouted Chana Salad', category: 'salads', ingredients: ['sprouted chana', 'onion', 'tomato'], preparation: ['Mix sprouts with vegetables and lemon.'] },
  { name: 'Raw Papaya Salad', category: 'salads', ingredients: ['raw papaya', 'tomato', 'chili'], preparation: ['Mix shredded papaya with tomato and spices.'] },
  { name: 'Raita', category: 'salads', ingredients: ['yogurt', 'cucumber', 'mint'], preparation: ['Mix yogurt with cucumber and mint.'] },

  // Desserts
  { name: 'Gulab Jamun', category: 'desserts', ingredients: ['milk powder', 'sugar', 'rose water'], preparation: ['Shape dough into balls, fry, and soak in syrup.'] },
  { name: 'Rasgulla', category: 'desserts', ingredients: ['milk', 'sugar', 'water'], preparation: ['Shape chenna into balls, cook in sugar syrup.'] },
  { name: 'Jalebi', category: 'desserts', ingredients: ['flour', 'sugar', 'saffron'], preparation: ['Pipe flour batter into hot oil and soak in syrup.'] },
  { name: 'Kheer', category: 'desserts', ingredients: ['milk', 'rice', 'sugar', 'cardamom'], preparation: ['Simmer milk and rice with sugar and cardamom.'] },
  { name: 'Rasmalai', category: 'desserts', ingredients: ['milk', 'sugar', 'saffron'], preparation: ['Soak chenna discs in sweetened milk.'] },
  { name: 'Ladoo', category: 'desserts', ingredients: ['gram flour', 'sugar', 'ghee'], preparation: ['Cook flour in ghee, shape with sugar into balls.'] },
  { name: 'Barfi', category: 'desserts', ingredients: ['milk', 'sugar', 'cardamom'], preparation: ['Cook milk with sugar and cardamom, shape into squares.'] },
  { name: 'Sandesh', category: 'desserts', ingredients: ['chenna', 'sugar'], preparation: ['Mix chenna with sugar, shape into discs.'] },
  { name: 'Peda', category: 'desserts', ingredients: ['khoya', 'sugar', 'cardamom'], preparation: ['Cook khoya with sugar, shape into discs.'] },
  { name: 'Halwa', category: 'desserts', ingredients: ['semolina', 'sugar', 'ghee'], preparation: ['Cook semolina with ghee and sugar.'] },
  { name: 'Badam Kheer', category: 'desserts', ingredients: ['almonds', 'milk', 'sugar'], preparation: ['Blend almonds, cook with milk and sugar.'] },
  { name: 'Besan Ladoo', category: 'desserts', ingredients: ['gram flour', 'ghee', 'sugar'], preparation: ['Cook gram flour in ghee, shape with sugar.'] },
  { name: 'Mysore Pak', category: 'desserts', ingredients: ['gram flour', 'ghee', 'sugar'], preparation: ['Cook flour with sugar and ghee, shape into pieces.'] },
  { name: 'Kaju Katli', category: 'desserts', ingredients: ['cashew', 'sugar'], preparation: ['Blend cashew with sugar, roll and slice.'] },
  { name: 'Puran Poli', category: 'desserts', ingredients: ['flour', 'jaggery', 'dal'], preparation: ['Make stuffed flatbreads with dal and jaggery.'] },
  { name: 'Kalakand', category: 'desserts', ingredients: ['milk', 'sugar'], preparation: ['Cook milk with sugar until thickened.'] },
  { name: 'Rabri', category: 'desserts', ingredients: ['milk', 'sugar'], preparation: ['Simmer milk until thick, sweeten.'] },
  { name: 'Shrikhand', category: 'desserts', ingredients: ['yogurt', 'sugar', 'saffron'], preparation: ['Sweeten and flavor yogurt with saffron.'] },
  { name: 'Modak', category: 'desserts', ingredients: ['rice flour', 'jaggery', 'coconut'], preparation: ['Fill rice dough with sweetened coconut, steam.'] },
  { name: 'Phirni', category: 'desserts', ingredients: ['rice', 'milk', 'sugar'], preparation: ['Simmer rice with milk and sugar.'] }

];


mongoose.connect('mongodb://localhost:27017/recipesDB')
  .then(() => {
    console.log('Connected to MongoDB');
    return Recipe.deleteMany({});  
  })
  .then(() => {
    console.log('Old recipes removed');
    return Recipe.insertMany(recipes);
  })
  .then(() => {
    console.log('Database seeded with expanded recipes');
    mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  });

