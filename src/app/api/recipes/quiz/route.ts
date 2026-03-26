export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);

	const query = searchParams.get('query');

	if (!query) return;

	const API_KEY = process.env.SPOONACULAR_API_KEY;

	try {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&${query}`,
		);

		if (!res.ok) throw new Error('API Limit reached');

		let data = await res.json();

		if (!data.results || data.results.length === 0) {
			const broadAnswers = [query[0], query[1], 'surprise', 'high'];

			const res2 = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&${broadAnswers}`,
			);

			data = await res2.json();
		}

		return Response.json(data);
	} catch (error) {
		console.error('Error fetching:', error);
		console.warn('Using Mock Data for Quiz');
	}
}
