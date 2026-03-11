const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const URL_RANDOM = process.env.NEXT_PUBLIC_SPOONACULAR_RANDOM_URL;

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
