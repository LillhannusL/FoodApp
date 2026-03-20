export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const ingredients = searchParams.get("ingredients");

  const API_KEY = process.env.SPOONACULAR_API_KEY;

  const res = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}&number=10`
  );

  const data = await res.json();

  return Response.json(data);
}