import type { Recipe } from "@/types/index";

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  const cleanSummary = recipe.summary.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className="card shadow-sm bg-amber-50 text-black">
      <figure className="px-10 pt-10">
        <img src={recipe.image} alt={recipe.title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{recipe.title}</h2>
        <p className="line-clamp-3">{cleanSummary}</p>
      </div>
    </div>
  );
}
