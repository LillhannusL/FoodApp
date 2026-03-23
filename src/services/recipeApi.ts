import { buildURL } from '@/services/buildUrl';

export const fetchRandomRecipes = async () => {
	try {
		const res = await fetch('/api/recipes/random');
		const data = await res.json();

		return data.recipes;
	} catch (error) {
		console.error('Fel vid hämtning:', error);
	}
};

export const fetchRecipeByIngredient = async (ingredients: String[]) => {
	try {
		const searchString = ingredients.join(',+');

		const res = await fetch(`/api/recipes/search?ingredients=${searchString}`);
		const data = await res.json();

		return data;
	} catch (error) {
		console.error('Fel vid hämtning:', error);
		return [];
	}
};

export const fetchRecipeByID = async (id: string) => {
	try {
		const res = await fetch(`/api/recipes/id?id=${id}`);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}

		const data = await res.json();

		return data;
	} catch (error) {
		console.error('Fel vid hämtning:', error);
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
		console.error('Failed to fetch:', error);
	}
};
