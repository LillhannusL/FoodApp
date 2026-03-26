import { MockService } from '@/services/mockServices';

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);

	const id = searchParams.get('id');

	const API_KEY = process.env.SPOONACULAR_API_KEY;

	try {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
		);
		if (!res.ok) throw new Error('API Limit reached');

		const data = await res.json();

		return Response.json(data);
	} catch (error) {
		console.error('Error fetching:', error);
		console.warn('Using Mock Data for Quiz');
	}
}
