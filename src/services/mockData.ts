export interface MockRecipe {
	id: string;
	title: string;
	image: string;
	extendedIngredients: {
		id: number;
		name: string;
		aisle: string;
		measures: { metric: { amount: number; unitShort: string } };
	}[];
	diets: string[];
	dishTypes: string[];
	summary: string;
}

export const MOCK_RECIPES: MockRecipe[] = [
	{
		id: '101',
		title: 'Creamy Vegan Mushroom Pasta',
		image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856',
		extendedIngredients: [
			{
				id: 1,
				name: 'pasta',
				aisle: 'pasta & rice',
				measures: { metric: { amount: 200, unitShort: 'g' } },
			},
			{
				id: 2,
				name: 'mushrooms',
				aisle: 'produce',
				measures: { metric: { amount: 150, unitShort: 'g' } },
			},
			{
				id: 3,
				name: 'garlic',
				aisle: 'spices & seasonings',
				measures: { metric: { amount: 2, unitShort: 'cloves' } },
			},
			{
				id: 4,
				name: 'onion',
				aisle: 'produce',
				measures: { metric: { amount: 1, unitShort: 'pc' } },
			},
			{
				id: 5,
				name: 'oat cream',
				aisle: 'milk, eggs, other dairy',
				measures: { metric: { amount: 200, unitShort: 'ml' } },
			},
		],
		diets: ['vegan', 'vegetarian', 'dairy free'],
		dishTypes: ['lunch', 'main course', 'dinner'],
		summary:
			"A delicious and creamy plant-based pasta that's ready in under 20 minutes.",
	},
	{
		id: '102',
		title: 'Gluten-Free Banana Pancakes',
		image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445',
		extendedIngredients: [
			{
				id: 6,
				name: 'banana',
				aisle: 'produce',
				measures: { metric: { amount: 2, unitShort: 'pcs' } },
			},
			{
				id: 7,
				name: 'egg',
				aisle: 'milk, eggs, other dairy',
				measures: { metric: { amount: 2, unitShort: 'pcs' } },
			},
			{
				id: 8,
				name: 'cinnamon',
				aisle: 'spices & seasonings',
				measures: { metric: { amount: 1, unitShort: 'tsp' } },
			},
			{
				id: 9,
				name: 'maple syrup',
				aisle: 'condiments, grilling supplies',
				measures: { metric: { amount: 2, unitShort: 'tbsp' } },
			},
		],
		diets: ['gluten free', 'vegetarian'],
		dishTypes: ['breakfast'],
		summary:
			'Healthy and fluffy pancakes made with just a few simple ingredients.',
	},
	{
		id: '103',
		title: 'Zesty Chicken Stir-Fry',
		image: 'https://images.unsplash.com/photo-1512058560566-42724afbc2db',
		extendedIngredients: [
			{
				id: 10,
				name: 'chicken',
				aisle: 'meat',
				measures: { metric: { amount: 400, unitShort: 'g' } },
			},
			{
				id: 11,
				name: 'broccoli',
				aisle: 'produce',
				measures: { metric: { amount: 200, unitShort: 'g' } },
			},
			{
				id: 12,
				name: 'soy sauce',
				aisle: 'condiments, grilling supplies',
				measures: { metric: { amount: 3, unitShort: 'tbsp' } },
			},
			{
				id: 13,
				name: 'ginger',
				aisle: 'produce',
				measures: { metric: { amount: 10, unitShort: 'g' } },
			},
			{
				id: 14,
				name: 'bell pepper',
				aisle: 'produce',
				measures: { metric: { amount: 1, unitShort: 'pc' } },
			},
		],
		diets: ['dairy free', 'low carb'],
		dishTypes: ['dinner', 'main course'],
		summary:
			'A high-protein ginger chicken stir-fry packed with fresh vegetables.',
	},
	{
		id: '104',
		title: 'Classic Avocado Toast',
		image: '/fallback-recipe.png',
		extendedIngredients: [
			{
				id: 15,
				name: 'bread',
				aisle: 'bakery/bread',
				measures: { metric: { amount: 2, unitShort: 'slices' } },
			},
			{
				id: 16,
				name: 'avocado',
				aisle: 'produce',
				measures: { metric: { amount: 1, unitShort: 'pc' } },
			},
			{
				id: 17,
				name: 'lemon',
				aisle: 'produce',
				measures: { metric: { amount: 0.5, unitShort: 'pc' } },
			},
			{
				id: 18,
				name: 'chili flakes',
				aisle: 'spices & seasonings',
				measures: { metric: { amount: 1, unitShort: 'pinch' } },
			},
		],
		diets: ['vegan', 'vegetarian', 'dairy free'],
		dishTypes: ['breakfast', 'brunch'],
		summary:
			'The ultimate breakfast staple with creamy avocado and a hint of lemon zest.',
	},
	{
		id: '105',
		title: 'Mediterranean Quinoa Salad',
		image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
		extendedIngredients: [
			{
				id: 19,
				name: 'quinoa',
				aisle: 'pasta & rice',
				measures: { metric: { amount: 150, unitShort: 'g' } },
			},
			{
				id: 20,
				name: 'cucumber',
				aisle: 'produce',
				measures: { metric: { amount: 0.5, unitShort: 'pc' } },
			},
			{
				id: 21,
				name: 'tomato',
				aisle: 'produce',
				measures: { metric: { amount: 2, unitShort: 'pcs' } },
			},
			{
				id: 22,
				name: 'feta cheese',
				aisle: 'cheese',
				measures: { metric: { amount: 50, unitShort: 'g' } },
			},
			{
				id: 23,
				name: 'olive oil',
				aisle: 'oil, vinegar, salad dressing',
				measures: { metric: { amount: 1, unitShort: 'tbsp' } },
			},
		],
		diets: ['vegetarian', 'gluten free'],
		dishTypes: ['lunch', 'salad'],
		summary: 'A refreshing and nutrient-dense salad inspired by Greek flavors.',
	},
	{
		id: '106',
		title: 'Sweet Potato & Black Bean Tacos',
		image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47',
		extendedIngredients: [
			{
				id: 24,
				name: 'sweet potato',
				aisle: 'produce',
				measures: { metric: { amount: 300, unitShort: 'g' } },
			},
			{
				id: 25,
				name: 'black beans',
				aisle: 'canned and jarred',
				measures: { metric: { amount: 200, unitShort: 'g' } },
			},
			{
				id: 26,
				name: 'tortilla',
				aisle: 'bakery/bread',
				measures: { metric: { amount: 3, unitShort: 'pcs' } },
			},
			{
				id: 27,
				name: 'lime',
				aisle: 'produce',
				measures: { metric: { amount: 1, unitShort: 'pc' } },
			},
			{
				id: 28,
				name: 'cilantro',
				aisle: 'produce',
				measures: { metric: { amount: 10, unitShort: 'g' } },
			},
		],
		diets: ['vegan', 'vegetarian', 'dairy free'],
		dishTypes: ['dinner', 'lunch'],
		summary:
			'Flavorful vegetarian tacos featuring roasted sweet potatoes and protein-packed beans.',
	},
	{
		id: '107',
		title: 'Baked Salmon with Asparagus',
		image: '/fallback-recipe.png',
		extendedIngredients: [
			{
				id: 29,
				name: 'salmon',
				aisle: 'seafood',
				measures: { metric: { amount: 200, unitShort: 'g' } },
			},
			{
				id: 30,
				name: 'asparagus',
				aisle: 'produce',
				measures: { metric: { amount: 100, unitShort: 'g' } },
			},
			{
				id: 31,
				name: 'lemon',
				aisle: 'produce',
				measures: { metric: { amount: 0.5, unitShort: 'pc' } },
			},
			{
				id: 32,
				name: 'butter',
				aisle: 'milk, eggs, other dairy',
				measures: { metric: { amount: 20, unitShort: 'g' } },
			},
		],
		diets: ['gluten free', 'paleo', 'low carb'],
		dishTypes: ['dinner', 'main course'],
		summary:
			'Perfectly seasoned salmon baked alongside tender green asparagus.',
	},
	{
		id: '108',
		title: 'Berry Smoothie Bowl',
		image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55',
		extendedIngredients: [
			{
				id: 33,
				name: 'blueberries',
				aisle: 'frozen',
				measures: { metric: { amount: 50, unitShort: 'g' } },
			},
			{
				id: 34,
				name: 'strawberries',
				aisle: 'produce',
				measures: { metric: { amount: 100, unitShort: 'g' } },
			},
			{
				id: 35,
				name: 'yogurt',
				aisle: 'milk, eggs, other dairy',
				measures: { metric: { amount: 200, unitShort: 'ml' } },
			},
			{
				id: 36,
				name: 'granola',
				aisle: 'cereal',
				measures: { metric: { amount: 30, unitShort: 'g' } },
			},
		],
		diets: ['vegetarian', 'gluten free'],
		dishTypes: ['breakfast'],
		summary:
			'A vibrant and cold smoothie bowl topped with fresh berries and crunchy granola.',
	},
	{
		id: '109',
		title: 'Red Lentil Soup',
		image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
		extendedIngredients: [
			{
				id: 37,
				name: 'lentils',
				aisle: 'pasta & rice',
				measures: { metric: { amount: 100, unitShort: 'g' } },
			},
			{
				id: 38,
				name: 'carrots',
				aisle: 'produce',
				measures: { metric: { amount: 2, unitShort: 'pcs' } },
			},
			{
				id: 39,
				name: 'cumin',
				aisle: 'spices & seasonings',
				measures: { metric: { amount: 1, unitShort: 'tsp' } },
			},
			{
				id: 40,
				name: 'vegetable broth',
				aisle: 'canned and jarred',
				measures: { metric: { amount: 500, unitShort: 'ml' } },
			},
		],
		diets: ['vegan', 'vegetarian', 'dairy free', 'gluten free'],
		dishTypes: ['lunch', 'soup'],
		summary:
			'A heartwarming and filling soup made with red lentils and earthy spices.',
	},
	{
		id: '110',
		title: 'Grilled Ribeye Steak',
		image: '/fallback-recipe.png',
		extendedIngredients: [
			{
				id: 41,
				name: 'steak',
				aisle: 'meat',
				measures: { metric: { amount: 300, unitShort: 'g' } },
			},
			{
				id: 42,
				name: 'rosemary',
				aisle: 'produce',
				measures: { metric: { amount: 1, unitShort: 'sprig' } },
			},
			{
				id: 43,
				name: 'garlic',
				aisle: 'spices & seasonings',
				measures: { metric: { amount: 2, unitShort: 'cloves' } },
			},
			{
				id: 44,
				name: 'salt',
				aisle: 'spices & seasonings',
				measures: { metric: { amount: 1, unitShort: 'pinch' } },
			},
		],
		diets: ['gluten free', 'paleo', 'low carb', 'keto'],
		dishTypes: ['dinner', 'main course'],
		summary:
			'Juicy ribeye steak grilled to perfection with aromatic garlic and rosemary.',
	},
];
