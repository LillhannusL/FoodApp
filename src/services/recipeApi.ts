import { buildURL } from '@/services/buildUrl';

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

export const fetchRandomRecipes = async (number: Number) => {
	try {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=${number}`,
		);
		const data = await res.json();

		return data.recipes;
	} catch (error) {
		console.error('Fel vid hämtning:', error);
	}
};

export const fetchRecipeByIngredient = async (ingredients: String[]) => {
	try {
		const searchString = ingredients.join(',+');

		const res = await fetch(
			`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${searchString}&number=10`,
		);
		const data = await res.json();

		return data;
	} catch (error) {
		console.error('Fel vid hämtning:', error);
		return [];
	}
};

export const fetchRecipeByID = async (id: number) => {
	try {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
		);
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
		let finalUrl = buildURL(result);
		let res = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&${finalUrl}`,
		);
		let data = await res.json();

		if (!data.results || data.results.length === 0) {
			const broadAnswers = [result[0], result[1], 'surprise', 'high'];

			finalUrl = buildURL(broadAnswers);
			res = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&${finalUrl}`,
			);
			data = await res.json();
		}

		return data.results;
	} catch (error) {
		console.error('Failed to fetch:', error);
	}
};
