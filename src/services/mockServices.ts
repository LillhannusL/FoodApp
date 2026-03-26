import { MOCK_RECIPES } from './mockData';

export const MockService = {
	//Random - give 1-3 random recipes
	getRandom: () => {
		return [...MOCK_RECIPES].sort(() => 0.5 - Math.random()).slice(0.3);
	},

	// Search - check recipe for any ingredient
	searchByIngredients: (searchTerms: string[]) => {
		const lowerTerms = searchTerms.map((t) => t.toLowerCase());

		return MOCK_RECIPES.filter((recipe) =>
			recipe.extendedIngredients.some((ing) =>
				lowerTerms.includes(ing.name.toLowerCase()),
			),
		).slice(0, 6);
	},

	// Quiz - give points based on match
	getQuizResult: (quizAnswers: { diet?: string; mealType?: string }) => {
		const scored = MOCK_RECIPES.map((recipe) => {
			let score = 0;

			if (
				quizAnswers.diet &&
				recipe.diets.includes(quizAnswers.diet?.toLowerCase())
			) {
				score += 5;
			}

			if (
				quizAnswers.mealType &&
				recipe.dishTypes.includes(quizAnswers.mealType.toLowerCase())
			) {
				score += 3;
			}

			return { ...recipe, score };
		});

		return scored
			.filter((r) => r.score > 0 || !quizAnswers.diet)
			.sort((a, b) => b.score - a.score)
			.slice(0, 4);
	},

	//ID - Get recipe from id
	getRecipeFromId: (recipeId: string) => {
		const found = MOCK_RECIPES.find((r) => r.id === recipeId);
		return found;
	},
};
