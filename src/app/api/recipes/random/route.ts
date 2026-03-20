export async function GET() {
  const API_KEY = process.env.SPOONACULAR_API_KEY;

  if (!API_KEY) {
    return Response.json({ error: "Missing API key" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`
    );

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Fetch failed" }, { status: 500 });
  }
}