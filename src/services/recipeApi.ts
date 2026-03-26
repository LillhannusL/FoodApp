import { buildURL } from '@/services/buildUrl';
import { MockService } from './mockServices';

export const fetchRandomRecipes = async () => {
	try {
		const res = await fetch('/api/recipes/random');

		const data = await res.json();
		return data.recipes;
	} catch (error) {
		console.warn('Using mock data for random');
		return MockService.getRandom();
	}
};

export const fetchRecipeByIngredient = async (ingredients: string[]) => {
	try {
		const searchString = ingredients.join(',+');

		const res = await fetch(`/api/recipes/search?ingredients=${searchString}`);

		const data = await res.json();

		return data;
	} catch (error) {
		console.warn('Using mock data for search');
		return MockService.searchByIngredients(ingredients);
	}
};

export const fetchRecipeByID = async (id: string) => {
	try {
		const res = await fetch(`/api/recipes/id?id=${id}`);
		if (!res.ok) {
		}

		const data = await res.json();

		return data;
	} catch (error) {
		console.warn('Using Mock Data for IdFetch');
		return MockService.getRecipeFromId(id);
	}
};

export const fetchRecipefromQuiz = async (result: any) => {
	try {
		if (!result) return [];

		let query = buildURL(result);

		let res = await fetch(`/api/recipes/quiz?query=${query}`);

		let data = await res.json();

		return data.results || [];
	} catch (error) {
		console.warn('Using Mock Data for Quiz');
		return MockService.getQuizResult(result);
	}
};
