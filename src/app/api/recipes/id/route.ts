export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");

  const API_KEY = process.env.SPOONACULAR_API_KEY;

  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
  );

  const data = await res.json();

  return Response.json(data);
}