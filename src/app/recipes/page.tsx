import mockData from "@/data/mock-recipes.json";
import RecipeCard from "@/components/recipe/recipeCard";

export default function RecipesPage() {
  const allRecipes = mockData.recipes;

  return (
    <section className="flex flex-col items-center pb-12">
      <h1 className="py-4 text-2xl">Recipe Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {allRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
