const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

// const fetchMockData = async () => {
//   try {
//     const res = await fetch(
//       `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`,
//     );
//     const data = await res.json();
//     console.log("Här är din mock-data, kopiera hela detta objekt:");
//     console.log(JSON.stringify(data, null, 2));
//   } catch (err) {
//     console.error("Fel vid hämtning:", err);
//   }
// };

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
	console.log('id till fetch:', id);
	try {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
		);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}

		const data = await res.json();
		console.log('hämtad data:', data);
		return data;
	} catch (error) {
		console.error('Fel vid hämtning:', error);
	}
};
