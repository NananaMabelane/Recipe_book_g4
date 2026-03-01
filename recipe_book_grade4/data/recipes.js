// data/recipes.js
// 100 recipes for the recipe book

export const DATASET = {
    categories: ["All", "Breakfast", "Lunch", "Dinner", "Snack", "Dessert", "Drink", "Salad", "Soup", "Pasta"],
    ingredients: [
        "salt", "pepper", "olive oil", "butter", "garlic", "onion", "lemon",
        "flour", "sugar", "honey", "egg", "milk", "cheese", "cream",
        "chicken", "beef", "tuna", "salmon", "shrimp",
        "rice", "pasta", "bread", "potato", "oats", "noodles",
        "tomato", "spinach", "carrot", "broccoli", "mushroom", "bell pepper", "cucumber", "lettuce",
        "banana", "apple", "strawberry",
        "soy sauce", "ketchup", "mustard", "mayonnaise",
        "canned tomatoes", "chickpeas", "beans", "lentils", "tofu",
        "peanut butter", "yogurt", "coconut milk", "parmesan", "mozzarella",
        "paprika", "cumin", "oregano", "basil", "ginger"
    ],
    recipes: [
        // BREAKFAST (15)
        {
            id: "r1", name: "Scrambled Eggs", category: "Breakfast", time: 8, rating: 4.5,
            tags: ["Quick", "High Protein"],
            ingredients: ["egg", "butter", "salt", "pepper", "milk"],
            steps: ["Crack eggs into a bowl, add a splash of milk, and whisk.", "Melt butter in a pan on low heat.", "Pour in eggs and stir slowly until cooked.", "Season with salt and pepper and serve."]
        },
        {
            id: "r2", name: "Banana Oat Porridge", category: "Breakfast", time: 7, rating: 4.3,
            tags: ["Healthy", "Quick"],
            ingredients: ["oats", "milk", "banana", "honey"],
            steps: ["Heat oats and milk in a pot, stirring often.", "Cook for 5 minutes until thick.", "Slice banana and place on top.", "Drizzle honey and serve warm."]
        },
        {
            id: "r3", name: "Cheese Omelet", category: "Breakfast", time: 10, rating: 4.7,
            tags: ["Quick", "High Protein"],
            ingredients: ["egg", "cheese", "butter", "salt", "pepper"],
            steps: ["Beat eggs with salt and pepper.", "Melt butter in a pan over medium heat.", "Pour eggs in, let them set slightly.", "Add cheese, fold the omelet, and serve."]
        },
        {
            id: "r4", name: "Toast with Peanut Butter", category: "Breakfast", time: 5, rating: 4.1,
            tags: ["Quick", "Budget"],
            ingredients: ["bread", "peanut butter", "banana", "honey"],
            steps: ["Toast the bread until golden.", "Spread peanut butter on top.", "Slice banana and add on top.", "Drizzle a little honey and enjoy."]
        },
        {
            id: "r5", name: "Yogurt Fruit Bowl", category: "Breakfast", time: 5, rating: 4.2,
            tags: ["Healthy", "Quick"],
            ingredients: ["yogurt", "strawberry", "banana", "honey"],
            steps: ["Spoon yogurt into a bowl.", "Slice strawberries and banana.", "Add fruit on top.", "Drizzle honey and serve."]
        },
        {
            id: "r6", name: "Egg on Toast", category: "Breakfast", time: 8, rating: 4.0,
            tags: ["Quick", "Budget"],
            ingredients: ["egg", "bread", "butter", "salt", "pepper"],
            steps: ["Toast the bread.", "Fry egg in butter until white is set.", "Place egg on toast.", "Season and serve."]
        },
        {
            id: "r7", name: "Pancakes", category: "Breakfast", time: 20, rating: 4.8,
            tags: ["Comfort"],
            ingredients: ["flour", "egg", "milk", "butter", "sugar", "honey"],
            steps: ["Mix flour, egg, milk and sugar into a smooth batter.", "Heat butter in a pan.", "Pour a ladle of batter and cook each side 2 minutes.", "Serve with honey."]
        },
        {
            id: "r8", name: "French Toast", category: "Breakfast", time: 12, rating: 4.6,
            tags: ["Comfort", "Quick"],
            ingredients: ["bread", "egg", "milk", "butter", "sugar"],
            steps: ["Beat egg with milk and a pinch of sugar.", "Dip bread slices in the egg mixture.", "Fry in butter until golden on both sides.", "Serve warm."]
        },
        {
            id: "r9", name: "Boiled Eggs", category: "Breakfast", time: 10, rating: 4.0,
            tags: ["High Protein", "Budget"],
            ingredients: ["egg", "salt"],
            steps: ["Bring water to a boil.", "Lower eggs in gently.", "Boil 7 minutes for soft, 10 for hard.", "Peel and season with salt."]
        },
        {
            id: "r10", name: "Avocado Toast", category: "Breakfast", time: 7, rating: 4.5,
            tags: ["Healthy", "Quick"],
            ingredients: ["bread", "tomato", "lemon", "salt", "pepper", "olive oil"],
            steps: ["Toast the bread.", "Dice tomato and season with lemon, salt, and olive oil.", "Spread on toast.", "Add pepper and serve."]
        },
        {
            id: "r11", name: "Oat Smoothie", category: "Breakfast", time: 5, rating: 4.1,
            tags: ["Healthy", "Quick"],
            ingredients: ["oats", "banana", "milk", "honey"],
            steps: ["Add all ingredients to a blender.", "Blend until smooth.", "Pour into a glass.", "Drink right away."]
        },
        {
            id: "r12", name: "Cheese on Toast", category: "Breakfast", time: 6, rating: 3.9,
            tags: ["Quick", "Budget"],
            ingredients: ["bread", "cheese", "butter"],
            steps: ["Butter the bread.", "Top with sliced or grated cheese.", "Grill or toast until cheese melts.", "Serve hot."]
        },
        {
            id: "r13", name: "Egg and Tomato Scramble", category: "Breakfast", time: 10, rating: 4.2,
            tags: ["Quick"],
            ingredients: ["egg", "tomato", "onion", "olive oil", "salt"],
            steps: ["Dice tomato and onion.", "Fry onion in olive oil until soft.", "Add tomato and cook 2 minutes.", "Whisk eggs, pour in, scramble until cooked."]
        },
        {
            id: "r14", name: "Cereal with Milk", category: "Breakfast", time: 2, rating: 3.5,
            tags: ["Quick", "Budget"],
            ingredients: ["oats", "milk", "sugar"],
            steps: ["Pour cereal or oats in a bowl.", "Add cold milk.", "Sprinkle sugar if needed.", "Eat right away."]
        },
        {
            id: "r15", name: "Baked Egg in Bread", category: "Breakfast", time: 15, rating: 4.4,
            tags: ["Comfort"],
            ingredients: ["bread", "egg", "butter", "cheese", "salt"],
            steps: ["Make a hole in the bread slice.", "Place in buttered oven dish.", "Crack egg into the hole.", "Top with cheese, bake at 180°C for 12 minutes."]
        },
        // LUNCH (15)
        {
            id: "r16", name: "Tuna Sandwich", category: "Lunch", time: 8, rating: 4.2,
            tags: ["Quick", "High Protein"],
            ingredients: ["tuna", "bread", "mayonnaise", "lettuce", "tomato"],
            steps: ["Mix tuna with mayonnaise.", "Lay lettuce and tomato on bread.", "Add tuna mix on top.", "Close and serve."]
        },
        {
            id: "r17", name: "Egg Salad Wrap", category: "Lunch", time: 10, rating: 4.0,
            tags: ["Quick"],
            ingredients: ["egg", "mayonnaise", "lettuce", "bread"],
            steps: ["Boil and chop eggs.", "Mix with mayonnaise.", "Put lettuce on bread.", "Add egg mix and wrap up."]
        },
        {
            id: "r18", name: "Chicken Soup", category: "Lunch", time: 35, rating: 4.6,
            tags: ["Comfort", "High Protein"],
            ingredients: ["chicken", "carrot", "onion", "salt", "pepper", "garlic"],
            steps: ["Chop all vegetables.", "Add chicken and veg to pot, cover with water.", "Boil, then simmer 25 minutes.", "Season with salt and pepper."]
        },
        {
            id: "r19", name: "Cheese and Ham Sandwich", category: "Lunch", time: 5, rating: 3.9,
            tags: ["Quick", "Budget"],
            ingredients: ["bread", "cheese", "mayonnaise"],
            steps: ["Spread mayo on bread.", "Add cheese slices.", "Close and press together.", "Serve as is or toast briefly."]
        },
        {
            id: "r20", name: "Tomato Soup", category: "Lunch", time: 20, rating: 4.3,
            tags: ["Comfort", "Healthy"],
            ingredients: ["canned tomatoes", "onion", "garlic", "olive oil", "salt", "basil"],
            steps: ["Fry onion and garlic in oil.", "Add tomatoes, simmer 10 minutes.", "Blend until smooth.", "Season and top with basil."]
        },
        {
            id: "r21", name: "Fried Rice", category: "Lunch", time: 15, rating: 4.4,
            tags: ["Budget", "Quick"],
            ingredients: ["rice", "egg", "soy sauce", "onion", "garlic", "olive oil"],
            steps: ["Cook rice and let it cool.", "Fry onion and garlic in oil.", "Add rice and stir-fry 3 minutes.", "Push to side, fry egg, mix in, add soy sauce."]
        },
        {
            id: "r22", name: "Lentil Soup", category: "Lunch", time: 30, rating: 4.3,
            tags: ["Healthy", "Budget"],
            ingredients: ["lentils", "onion", "garlic", "cumin", "olive oil", "salt"],
            steps: ["Rinse lentils well.", "Fry onion and garlic with cumin.", "Add lentils and 3 cups water.", "Simmer 25 minutes until soft."]
        },
        {
            id: "r23", name: "Pasta Salad", category: "Lunch", time: 15, rating: 4.1,
            tags: ["Budget", "Healthy"],
            ingredients: ["pasta", "tomato", "cucumber", "olive oil", "salt", "pepper"],
            steps: ["Cook pasta, drain, and cool.", "Chop tomato and cucumber.", "Mix everything with olive oil.", "Season and serve cold."]
        },
        {
            id: "r24", name: "Chickpea Salad", category: "Lunch", time: 10, rating: 4.2,
            tags: ["Vegan", "Healthy"],
            ingredients: ["chickpeas", "tomato", "cucumber", "lemon", "olive oil", "salt"],
            steps: ["Drain and rinse chickpeas.", "Chop tomato and cucumber.", "Mix with lemon and oil.", "Season and serve."]
        },
        {
            id: "r25", name: "Potato and Egg Salad", category: "Lunch", time: 20, rating: 4.0,
            tags: ["Budget"],
            ingredients: ["potato", "egg", "mayonnaise", "onion", "salt", "pepper"],
            steps: ["Boil potatoes and eggs, then cool.", "Peel and chop both.", "Mix with mayo and onion.", "Season and serve."]
        },
        {
            id: "r26", name: "Cucumber Tomato Salad", category: "Lunch", time: 5, rating: 3.8,
            tags: ["Vegan", "Quick", "Healthy"],
            ingredients: ["cucumber", "tomato", "onion", "olive oil", "salt", "lemon"],
            steps: ["Dice cucumber, tomato, and onion.", "Mix in a bowl.", "Dress with olive oil and lemon.", "Season and serve."]
        },
        {
            id: "r27", name: "Baked Potato", category: "Lunch", time: 45, rating: 4.1,
            tags: ["Budget", "Comfort"],
            ingredients: ["potato", "butter", "cheese", "salt"],
            steps: ["Poke holes in potato with fork.", "Rub with butter and salt.", "Bake at 200°C for 40 minutes.", "Cut open, top with cheese."]
        },
        {
            id: "r28", name: "Rice and Beans", category: "Lunch", time: 25, rating: 4.0,
            tags: ["Vegan", "Budget"],
            ingredients: ["rice", "beans", "onion", "garlic", "olive oil", "salt"],
            steps: ["Cook rice separately.", "Fry onion and garlic in oil.", "Add beans, cook 5 minutes.", "Serve beans over rice."]
        },
        {
            id: "r29", name: "Spinach and Egg Soup", category: "Lunch", time: 15, rating: 4.0,
            tags: ["Healthy", "Quick"],
            ingredients: ["spinach", "egg", "garlic", "olive oil", "salt"],
            steps: ["Fry garlic briefly in oil.", "Add water and bring to boil.", "Add spinach, simmer 5 minutes.", "Crack eggs in, poach 3 minutes."]
        },
        {
            id: "r30", name: "Carrot and Ginger Soup", category: "Lunch", time: 25, rating: 4.3,
            tags: ["Healthy", "Vegan"],
            ingredients: ["carrot", "onion", "ginger", "olive oil", "salt", "coconut milk"],
            steps: ["Chop carrot, onion, and ginger.", "Fry in oil 3 minutes.", "Cover with water and boil 15 minutes.", "Blend, add coconut milk, season."]
        },
        // DINNER (20)
        {
            id: "r31", name: "Garlic Butter Pasta", category: "Pasta", time: 20, rating: 4.7,
            tags: ["Budget", "Quick"],
            ingredients: ["pasta", "garlic", "butter", "parmesan", "salt", "pepper"],
            steps: ["Cook pasta in salted water.", "Melt butter, fry garlic gently.", "Drain pasta, toss with butter and garlic.", "Top with parmesan and black pepper."]
        },
        {
            id: "r32", name: "Tomato Pasta", category: "Pasta", time: 25, rating: 4.5,
            tags: ["Budget", "Comfort"],
            ingredients: ["pasta", "canned tomatoes", "garlic", "onion", "olive oil", "basil", "salt"],
            steps: ["Fry onion and garlic in oil.", "Add tomatoes and simmer 15 minutes.", "Season with basil and salt.", "Toss with cooked pasta."]
        },
        {
            id: "r33", name: "Chicken and Rice", category: "Dinner", time: 30, rating: 4.5,
            tags: ["High Protein", "Budget"],
            ingredients: ["chicken", "rice", "garlic", "onion", "soy sauce", "olive oil"],
            steps: ["Cook rice.", "Fry onion and garlic in oil.", "Add chicken, cook through.", "Mix soy sauce in, serve over rice."]
        },
        {
            id: "r34", name: "Beef Stir Fry", category: "Dinner", time: 20, rating: 4.4,
            tags: ["High Protein", "Quick"],
            ingredients: ["beef", "bell pepper", "onion", "soy sauce", "garlic", "olive oil"],
            steps: ["Slice beef and veg thinly.", "Fry garlic in hot oil.", "Add beef, cook 3 minutes.", "Add veg and soy sauce, stir-fry 3 more minutes."]
        },
        {
            id: "r35", name: "Salmon with Lemon", category: "Dinner", time: 20, rating: 4.6,
            tags: ["High Protein", "Healthy"],
            ingredients: ["salmon", "lemon", "garlic", "butter", "salt", "pepper"],
            steps: ["Season salmon with salt and pepper.", "Melt butter in pan on medium-high.", "Cook salmon 3–4 mins each side.", "Squeeze lemon on top before serving."]
        },
        {
            id: "r36", name: "Spaghetti Bolognese", category: "Pasta", time: 35, rating: 4.8,
            tags: ["Comfort", "High Protein"],
            ingredients: ["pasta", "beef", "canned tomatoes", "onion", "garlic", "olive oil", "salt"],
            steps: ["Fry onion and garlic in oil.", "Add beef and cook until browned.", "Add tomatoes and simmer 20 minutes.", "Serve over cooked pasta."]
        },
        {
            id: "r37", name: "Potato Soup", category: "Soup", time: 30, rating: 4.2,
            tags: ["Comfort", "Budget"],
            ingredients: ["potato", "onion", "garlic", "butter", "milk", "salt", "pepper"],
            steps: ["Dice potatoes and onion.", "Cook in butter with garlic until soft.", "Add milk and water, simmer 20 min.", "Mash or blend to desired texture."]
        },
        {
            id: "r38", name: "Tuna Pasta", category: "Pasta", time: 15, rating: 4.1,
            tags: ["Quick", "Budget"],
            ingredients: ["pasta", "tuna", "olive oil", "garlic", "tomato", "salt"],
            steps: ["Cook pasta.", "Fry garlic in oil.", "Add tomato and cook 3 minutes.", "Mix in tuna, toss with pasta."]
        },
        {
            id: "r39", name: "Chicken Noodle Soup", category: "Soup", time: 30, rating: 4.5,
            tags: ["Comfort", "High Protein"],
            ingredients: ["chicken", "noodles", "carrot", "onion", "garlic", "salt"],
            steps: ["Simmer chicken with onion 20 minutes.", "Remove chicken, shred it.", "Add noodles and carrot, cook 8 minutes.", "Return chicken, season and serve."]
        },
        {
            id: "r40", name: "Egg Fried Rice", category: "Dinner", time: 15, rating: 4.3,
            tags: ["Budget", "Quick"],
            ingredients: ["rice", "egg", "soy sauce", "onion", "garlic", "olive oil", "carrot"],
            steps: ["Use cold cooked rice.", "Fry onion, garlic, and carrot in oil.", "Add rice and fry 3 minutes.", "Push aside, scramble eggs in, add soy sauce."]
        },
        {
            id: "r41", name: "Vegetable Curry", category: "Dinner", time: 30, rating: 4.4,
            tags: ["Vegan", "Comfort"],
            ingredients: ["potato", "carrot", "onion", "coconut milk", "cumin", "garlic", "salt"],
            steps: ["Chop all veg.", "Fry onion and garlic with cumin.", "Add potato and carrot, stir.", "Pour in coconut milk, simmer 20 minutes."]
        },
        {
            id: "r42", name: "Fish and Chips", category: "Dinner", time: 30, rating: 4.5,
            tags: ["Comfort"],
            ingredients: ["salmon", "potato", "flour", "olive oil", "salt", "lemon"],
            steps: ["Cut potato into wedges and bake with oil.", "Coat fish in flour, season.", "Pan-fry fish 4 minutes each side.", "Serve with lemon wedges."]
        },
        {
            id: "r43", name: "Pasta with Cream Sauce", category: "Pasta", time: 20, rating: 4.5,
            tags: ["Comfort"],
            ingredients: ["pasta", "cream", "parmesan", "garlic", "butter", "pepper"],
            steps: ["Cook pasta.", "Melt butter, fry garlic gently.", "Add cream and parmesan, stir.", "Toss with pasta and season."]
        },
        {
            id: "r44", name: "Grilled Chicken", category: "Dinner", time: 25, rating: 4.4,
            tags: ["High Protein", "Healthy"],
            ingredients: ["chicken", "garlic", "lemon", "olive oil", "paprika", "salt"],
            steps: ["Mix garlic, lemon, oil, and paprika.", "Coat chicken and marinate 10 minutes.", "Grill or pan-fry each side 6–8 minutes.", "Rest 2 minutes before serving."]
        },
        {
            id: "r45", name: "Beef and Potato Stew", category: "Dinner", time: 45, rating: 4.6,
            tags: ["Comfort", "High Protein"],
            ingredients: ["beef", "potato", "carrot", "onion", "garlic", "salt", "olive oil"],
            steps: ["Brown beef in oil.", "Add onion, garlic, carrot and potato.", "Cover with water and simmer 35 minutes.", "Season and serve."]
        },
        {
            id: "r46", name: "Mushroom Pasta", category: "Pasta", time: 20, rating: 4.3,
            tags: ["Budget", "Vegetarian"],
            ingredients: ["pasta", "mushroom", "garlic", "butter", "cream", "salt", "parmesan"],
            steps: ["Cook pasta.", "Fry mushrooms and garlic in butter.", "Add cream, reduce slightly.", "Toss pasta in sauce, top with parmesan."]
        },
        {
            id: "r47", name: "Shrimp Stir Fry", category: "Dinner", time: 15, rating: 4.4,
            tags: ["High Protein", "Quick"],
            ingredients: ["shrimp", "bell pepper", "garlic", "soy sauce", "ginger", "olive oil"],
            steps: ["Peel and clean shrimp.", "Fry garlic and ginger in oil.", "Add shrimp and bell pepper.", "Cook 5 minutes, add soy sauce."]
        },
        {
            id: "r48", name: "Spinach and Ricotta Pasta", category: "Pasta", time: 20, rating: 4.2,
            tags: ["Vegetarian"],
            ingredients: ["pasta", "spinach", "cheese", "garlic", "butter", "salt"],
            steps: ["Cook pasta.", "Wilt spinach in butter with garlic.", "Mix in cheese until creamy.", "Toss pasta and serve."]
        },
        {
            id: "r49", name: "Noodle Stir Fry", category: "Dinner", time: 15, rating: 4.1,
            tags: ["Budget", "Quick"],
            ingredients: ["noodles", "soy sauce", "egg", "onion", "carrot", "garlic"],
            steps: ["Cook noodles, drain.", "Fry onion, carrot, garlic in oil.", "Add noodles and soy sauce.", "Push aside, scramble egg in, mix together."]
        },
        {
            id: "r50", name: "Baked Salmon", category: "Dinner", time: 20, rating: 4.6,
            tags: ["High Protein", "Healthy"],
            ingredients: ["salmon", "lemon", "garlic", "olive oil", "salt", "pepper"],
            steps: ["Place salmon on a baking tray.", "Drizzle with oil, garlic, and lemon.", "Season with salt and pepper.", "Bake at 200°C for 15 minutes."]
        },
        // SNACK (10)
        {
            id: "r51", name: "Apple with Peanut Butter", category: "Snack", time: 3, rating: 4.3,
            tags: ["Healthy", "Quick"],
            ingredients: ["apple", "peanut butter"],
            steps: ["Slice apple.", "Serve with peanut butter for dipping."]
        },
        {
            id: "r52", name: "Boiled Egg Snack", category: "Snack", time: 10, rating: 3.9,
            tags: ["High Protein", "Budget"],
            ingredients: ["egg", "salt", "pepper"],
            steps: ["Boil egg for 8–10 minutes.", "Peel and halve.", "Sprinkle salt and pepper."]
        },
        {
            id: "r53", name: "Cheese and Crackers", category: "Snack", time: 3, rating: 3.8,
            tags: ["Quick", "Budget"],
            ingredients: ["cheese", "bread"],
            steps: ["Slice cheese.", "Place on bread or crackers.", "Eat right away."]
        },
        {
            id: "r54", name: "Banana with Honey", category: "Snack", time: 2, rating: 3.7,
            tags: ["Quick", "Healthy"],
            ingredients: ["banana", "honey"],
            steps: ["Peel and slice banana.", "Drizzle honey on top.", "Serve immediately."]
        },
        {
            id: "r55", name: "Yogurt with Berries", category: "Snack", time: 3, rating: 4.4,
            tags: ["Healthy", "Quick"],
            ingredients: ["yogurt", "strawberry", "honey"],
            steps: ["Spoon yogurt into a bowl.", "Add sliced strawberries.", "Drizzle honey on top."]
        },
        {
            id: "r56", name: "Cucumber and Hummus", category: "Snack", time: 5, rating: 4.0,
            tags: ["Vegan", "Healthy"],
            ingredients: ["cucumber", "chickpeas", "lemon", "salt", "olive oil"],
            steps: ["Blend chickpeas with lemon, olive oil, salt.", "Slice cucumber.", "Dip cucumber in hummus."]
        },
        {
            id: "r57", name: "Tomato on Toast", category: "Snack", time: 5, rating: 3.8,
            tags: ["Quick", "Budget"],
            ingredients: ["bread", "tomato", "olive oil", "salt"],
            steps: ["Toast bread.", "Slice tomato and place on top.", "Drizzle oil and add salt."]
        },
        {
            id: "r58", name: "Oat Energy Balls", category: "Snack", time: 10, rating: 4.3,
            tags: ["Healthy"],
            ingredients: ["oats", "peanut butter", "honey", "banana"],
            steps: ["Mash banana in a bowl.", "Mix in oats, peanut butter, honey.", "Roll into small balls.", "Refrigerate 30 minutes before eating."]
        },
        {
            id: "r59", name: "Fruit Salad", category: "Snack", time: 8, rating: 4.2,
            tags: ["Healthy", "Vegan"],
            ingredients: ["banana", "apple", "strawberry", "lemon", "honey"],
            steps: ["Chop all fruit.", "Mix in a bowl.", "Add lemon juice and honey.", "Toss and serve."]
        },
        {
            id: "r60", name: "Bread with Butter", category: "Snack", time: 2, rating: 3.5,
            tags: ["Budget", "Quick"],
            ingredients: ["bread", "butter"],
            steps: ["Slice bread.", "Spread butter on top.", "Eat as is."]
        },
        // DESSERT (10)
        {
            id: "r61", name: "Banana Ice Cream", category: "Dessert", time: 5, rating: 4.5,
            tags: ["Healthy", "Vegan"],
            ingredients: ["banana", "honey"],
            steps: ["Freeze peeled bananas overnight.", "Blend frozen bananas until smooth.", "Drizzle with honey.", "Serve in a bowl."]
        },
        {
            id: "r62", name: "Simple Cookies", category: "Dessert", time: 20, rating: 4.4,
            tags: ["Comfort"],
            ingredients: ["flour", "butter", "sugar", "egg"],
            steps: ["Mix butter and sugar until fluffy.", "Add egg and stir.", "Mix in flour to form dough.", "Bake at 180°C for 12 minutes."]
        },
        {
            id: "r63", name: "Rice Pudding", category: "Dessert", time: 30, rating: 4.2,
            tags: ["Comfort", "Budget"],
            ingredients: ["rice", "milk", "sugar", "vanilla"],
            steps: ["Cook rice in milk, stirring often.", "Add sugar and a splash of vanilla.", "Simmer until creamy and thick.", "Serve warm or cold."]
        },
        {
            id: "r64", name: "Strawberry Yogurt Parfait", category: "Dessert", time: 5, rating: 4.4,
            tags: ["Healthy", "Quick"],
            ingredients: ["yogurt", "strawberry", "oats", "honey"],
            steps: ["Layer yogurt in a glass.", "Add sliced strawberries.", "Top with oats.", "Drizzle honey and serve."]
        },
        {
            id: "r65", name: "Chocolate Mug Cake", category: "Dessert", time: 5, rating: 4.6,
            tags: ["Quick", "Comfort"],
            ingredients: ["flour", "sugar", "egg", "butter", "milk"],
            steps: ["Mix flour, sugar, egg, butter, and milk in a mug.", "Microwave for 2 minutes.", "Check centre is set.", "Let cool 1 minute and eat from the mug."]
        },
        {
            id: "r66", name: "Baked Apple", category: "Dessert", time: 25, rating: 4.1,
            tags: ["Healthy", "Comfort"],
            ingredients: ["apple", "honey", "butter", "sugar"],
            steps: ["Core the apple.", "Fill with honey and butter.", "Sprinkle sugar on top.", "Bake at 180°C for 20 minutes."]
        },
        {
            id: "r67", name: "Pancake with Berries", category: "Dessert", time: 20, rating: 4.5,
            tags: ["Comfort"],
            ingredients: ["flour", "egg", "milk", "strawberry", "honey"],
            steps: ["Make batter from flour, egg, milk.", "Cook thin pancakes in a pan.", "Stack and top with strawberries.", "Drizzle honey."]
        },
        {
            id: "r68", name: "Oat and Honey Bars", category: "Dessert", time: 25, rating: 4.0,
            tags: ["Healthy", "Budget"],
            ingredients: ["oats", "honey", "butter", "sugar"],
            steps: ["Melt butter with honey and sugar.", "Stir in oats and press into a tray.", "Bake at 170°C for 18 minutes.", "Cool and cut into bars."]
        },
        {
            id: "r69", name: "Fruit Jelly", category: "Dessert", time: 15, rating: 3.8,
            tags: ["Quick"],
            ingredients: ["strawberry", "lemon", "sugar"],
            steps: ["Blend strawberries with lemon and sugar.", "Heat mixture until slightly thick.", "Pour into moulds.", "Refrigerate until set."]
        },
        {
            id: "r70", name: "Caramel Banana", category: "Dessert", time: 10, rating: 4.4,
            tags: ["Quick", "Comfort"],
            ingredients: ["banana", "butter", "sugar", "honey"],
            steps: ["Melt butter and sugar in pan.", "Add banana slices.", "Cook until golden and caramelised.", "Drizzle honey and serve warm."]
        },
        // SALAD (10)
        {
            id: "r71", name: "Caesar Salad", category: "Salad", time: 10, rating: 4.5,
            tags: ["Healthy", "Quick"],
            ingredients: ["lettuce", "parmesan", "olive oil", "lemon", "garlic", "salt"],
            steps: ["Wash and chop lettuce.", "Mix olive oil, lemon, garlic, salt.", "Toss lettuce with dressing.", "Top with parmesan."]
        },
        {
            id: "r72", name: "Greek Salad", category: "Salad", time: 8, rating: 4.4,
            tags: ["Vegetarian", "Healthy"],
            ingredients: ["cucumber", "tomato", "onion", "mozzarella", "olive oil", "salt", "oregano"],
            steps: ["Chop cucumbers, tomato, onion.", "Add cheese cubes.", "Dress with olive oil.", "Season with salt and oregano."]
        },
        {
            id: "r73", name: "Tuna Salad", category: "Salad", time: 8, rating: 4.1,
            tags: ["High Protein", "Quick"],
            ingredients: ["tuna", "cucumber", "tomato", "lemon", "olive oil", "salt"],
            steps: ["Drain tuna.", "Chop cucumber and tomato.", "Mix all together.", "Dress with lemon and olive oil."]
        },
        {
            id: "r74", name: "Spinach Salad", category: "Salad", time: 5, rating: 4.0,
            tags: ["Vegan", "Healthy", "Quick"],
            ingredients: ["spinach", "tomato", "lemon", "olive oil", "salt"],
            steps: ["Rinse spinach leaves.", "Add sliced tomato.", "Dress with lemon and oil.", "Season and serve."]
        },
        {
            id: "r75", name: "Bean Salad", category: "Salad", time: 10, rating: 3.9,
            tags: ["Vegan", "Budget"],
            ingredients: ["beans", "tomato", "onion", "olive oil", "lemon", "salt"],
            steps: ["Drain and rinse beans.", "Chop tomato and onion.", "Mix together.", "Dress with oil and lemon."]
        },
        {
            id: "r76", name: "Egg and Potato Salad", category: "Salad", time: 20, rating: 4.1,
            tags: ["Budget"],
            ingredients: ["egg", "potato", "mayonnaise", "onion", "salt"],
            steps: ["Boil egg and potato.", "Chop both once cooled.", "Mix with mayo and onion.", "Season and chill."]
        },
        {
            id: "r77", name: "Carrot Slaw", category: "Salad", time: 8, rating: 3.8,
            tags: ["Vegan", "Budget"],
            ingredients: ["carrot", "onion", "lemon", "olive oil", "salt"],
            steps: ["Grate carrot finely.", "Dice onion.", "Mix with lemon and oil.", "Season and serve."]
        },
        {
            id: "r78", name: "Tomato Mozzarella Salad", category: "Salad", time: 5, rating: 4.3,
            tags: ["Vegetarian", "Quick"],
            ingredients: ["tomato", "mozzarella", "basil", "olive oil", "salt"],
            steps: ["Slice tomato and mozzarella.", "Arrange on a plate.", "Add basil leaves.", "Drizzle oil and season."]
        },
        {
            id: "r79", name: "Mixed Leaf Salad", category: "Salad", time: 5, rating: 3.7,
            tags: ["Vegan", "Quick"],
            ingredients: ["lettuce", "spinach", "cucumber", "olive oil", "lemon", "salt"],
            steps: ["Wash and dry leaves.", "Add sliced cucumber.", "Toss with oil and lemon.", "Season and serve."]
        },
        {
            id: "r80", name: "Pasta Salad with Tuna", category: "Salad", time: 15, rating: 4.2,
            tags: ["Quick"],
            ingredients: ["pasta", "tuna", "tomato", "mayonnaise", "salt"],
            steps: ["Cook and cool pasta.", "Mix in drained tuna and tomato.", "Stir in mayo.", "Season and refrigerate."]
        },
        // DRINK (5)
        {
            id: "r81", name: "Banana Smoothie", category: "Drink", time: 5, rating: 4.3,
            tags: ["Healthy", "Quick"],
            ingredients: ["banana", "milk", "honey"],
            steps: ["Peel banana and add to blender.", "Add milk and honey.", "Blend until smooth.", "Pour and drink right away."]
        },
        {
            id: "r82", name: "Strawberry Smoothie", category: "Drink", time: 5, rating: 4.4,
            tags: ["Healthy", "Quick"],
            ingredients: ["strawberry", "yogurt", "milk", "honey"],
            steps: ["Add all ingredients to blender.", "Blend until smooth.", "Taste and add more honey if needed.", "Serve in a glass."]
        },
        {
            id: "r83", name: "Lemon Water", category: "Drink", time: 2, rating: 3.8,
            tags: ["Healthy", "Quick"],
            ingredients: ["lemon", "honey"],
            steps: ["Squeeze lemon into a glass of water.", "Add honey and stir.", "Add ice if you like.", "Drink chilled."]
        },
        {
            id: "r84", name: "Hot Chocolate", category: "Drink", time: 8, rating: 4.6,
            tags: ["Comfort", "Quick"],
            ingredients: ["milk", "sugar", "butter"],
            steps: ["Warm milk in a pot.", "Add sugar and stir.", "Add a small cube of butter for richness.", "Pour into a mug and sip warm."]
        },
        {
            id: "r85", name: "Apple Ginger Juice", category: "Drink", time: 5, rating: 4.0,
            tags: ["Healthy", "Quick"],
            ingredients: ["apple", "ginger", "lemon", "honey"],
            steps: ["Juice apple or blend and strain.", "Add grated ginger and lemon.", "Sweeten with honey.", "Stir and serve over ice."]
        },
        // SOUP (extra, to round up to 100)
        {
            id: "r86", name: "Minestrone Soup", category: "Soup", time: 35, rating: 4.3,
            tags: ["Healthy", "Comfort"],
            ingredients: ["tomato", "carrot", "onion", "pasta", "beans", "garlic", "olive oil", "salt"],
            steps: ["Fry onion and garlic in oil.", "Add carrot and fry 3 minutes.", "Add tomatoes, beans, and water.", "Simmer 20 minutes, add pasta last 10 min."]
        },
        {
            id: "r87", name: "Corn Soup", category: "Soup", time: 20, rating: 4.0,
            tags: ["Comfort", "Budget"],
            ingredients: ["corn", "onion", "butter", "milk", "salt", "pepper"],
            steps: ["Fry onion in butter.", "Add corn and milk.", "Simmer 10 minutes.", "Blend half the soup, season, and serve."]
        },
        {
            id: "r88", name: "Broccoli Soup", category: "Soup", time: 20, rating: 4.1,
            tags: ["Healthy", "Vegetarian"],
            ingredients: ["broccoli", "onion", "garlic", "butter", "salt", "cream"],
            steps: ["Fry onion and garlic in butter.", "Add broccoli and cover with water.", "Simmer 15 minutes.", "Blend, add cream, season."]
        },
        {
            id: "r89", name: "Mushroom Soup", category: "Soup", time: 25, rating: 4.2,
            tags: ["Comfort", "Vegetarian"],
            ingredients: ["mushroom", "onion", "garlic", "butter", "cream", "salt"],
            steps: ["Fry onion and garlic in butter.", "Add sliced mushrooms, cook 8 minutes.", "Add water and simmer 10 minutes.", "Blend, stir in cream, season."]
        },
        {
            id: "r90", name: "Simple Bean Soup", category: "Soup", time: 20, rating: 3.9,
            tags: ["Budget", "Vegan"],
            ingredients: ["beans", "tomato", "onion", "garlic", "olive oil", "salt"],
            steps: ["Fry onion and garlic in oil.", "Add beans and chopped tomato.", "Cover with water, simmer 15 minutes.", "Season and serve."]
        },
        {
            id: "r91", name: "Leek and Potato Soup", category: "Soup", time: 30, rating: 4.2,
            tags: ["Comfort", "Budget"],
            ingredients: ["potato", "onion", "butter", "milk", "salt", "pepper"],
            steps: ["Slice onion and potato.", "Cook in butter until soft.", "Add milk and simmer 15 minutes.", "Blend and season."]
        },
        {
            id: "r92", name: "Pea Soup", category: "Soup", time: 20, rating: 4.0,
            tags: ["Healthy", "Budget"],
            ingredients: ["peas", "onion", "garlic", "olive oil", "salt", "cream"],
            steps: ["Fry onion and garlic in oil.", "Add peas and water.", "Simmer 10 minutes.", "Blend, add cream, season."]
        },
        // More dinner/lunch to hit 100
        {
            id: "r93", name: "Chicken Wrap", category: "Lunch", time: 15, rating: 4.3,
            tags: ["High Protein", "Quick"],
            ingredients: ["chicken", "lettuce", "tomato", "mayonnaise", "bread"],
            steps: ["Cook and slice chicken.", "Lay lettuce and tomato on bread.", "Add chicken and mayo.", "Roll and serve."]
        },
        {
            id: "r94", name: "Vegetable Fried Rice", category: "Dinner", time: 15, rating: 4.2,
            tags: ["Vegan", "Budget"],
            ingredients: ["rice", "carrot", "peas", "onion", "soy sauce", "garlic", "olive oil"],
            steps: ["Cook rice and let it cool.", "Fry onion, garlic, carrot in oil.", "Add peas and rice, stir-fry.", "Add soy sauce and toss."]
        },
        {
            id: "r95", name: "Beef Burger", category: "Dinner", time: 20, rating: 4.6,
            tags: ["Comfort", "High Protein"],
            ingredients: ["beef", "bread", "lettuce", "tomato", "ketchup", "onion", "salt"],
            steps: ["Season beef and shape into patty.", "Grill or fry 4–5 minutes per side.", "Toast bread briefly.", "Assemble with lettuce, tomato, ketchup."]
        },
        {
            id: "r96", name: "Pesto Pasta", category: "Pasta", time: 15, rating: 4.3,
            tags: ["Quick", "Budget"],
            ingredients: ["pasta", "basil", "parmesan", "garlic", "olive oil", "salt"],
            steps: ["Cook pasta.", "Blend basil, parmesan, garlic, and oil.", "Toss pasta with pesto sauce.", "Season and serve."]
        },
        {
            id: "r97", name: "Lentil Dahl", category: "Dinner", time: 30, rating: 4.4,
            tags: ["Vegan", "Budget", "Healthy"],
            ingredients: ["lentils", "onion", "garlic", "cumin", "ginger", "coconut milk", "salt"],
            steps: ["Fry onion, garlic, ginger, and cumin.", "Add lentils and coconut milk.", "Simmer 20 minutes until thick.", "Season and serve with rice or bread."]
        },
        {
            id: "r98", name: "Tofu Stir Fry", category: "Dinner", time: 15, rating: 4.0,
            tags: ["Vegan", "High Protein"],
            ingredients: ["tofu", "bell pepper", "soy sauce", "garlic", "ginger", "olive oil"],
            steps: ["Cube and pat dry tofu.", "Fry garlic and ginger in hot oil.", "Add tofu and fry until golden.", "Add bell pepper and soy sauce, cook 3 minutes."]
        },
        {
            id: "r99", name: "Cucumber Soup", category: "Soup", time: 10, rating: 3.7,
            tags: ["Healthy", "Quick"],
            ingredients: ["cucumber", "yogurt", "garlic", "lemon", "salt"],
            steps: ["Chop cucumber roughly.", "Blend with yogurt, garlic, and lemon.", "Season with salt.", "Chill and serve cold."]
        },
        {
            id: "r100", name: "Chickpea Curry", category: "Dinner", time: 25, rating: 4.5,
            tags: ["Vegan", "Healthy", "Budget"],
            ingredients: ["chickpeas", "canned tomatoes", "onion", "garlic", "cumin", "olive oil", "salt"],
            steps: ["Fry onion, garlic, and cumin in oil.", "Add canned tomatoes and simmer 10 minutes.", "Add chickpeas, cook 10 more minutes.", "Season and serve with rice or bread."]
        }
    ]
};
