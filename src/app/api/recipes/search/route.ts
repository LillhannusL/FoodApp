import { MockService } from '@/services/mockServices';

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);

	const ingredients = searchParams.get('ingredients');

	const API_KEY = process.env.SPOONACULAR_API_KEY;
	try {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}&number=10`,
		);

		if (!res.ok) throw new Error('API Limit reached');

		const data = await res.json();

		return Response.json(data);
	} catch (error) {
		console.error('Error fetching:', error);
		console.warn('Using Mock Data for Search');
	}
}
