import type { RecipeData } from '@/types/index';

interface Props {
	recipe: RecipeData;
}

export default function RecipeCard({ recipe }: Props) {
	if (!recipe) return;

	return (
		<div className="card shadow-sm bg-amber-50 text-black">
			<figure className="px-10 pt-10">
				<img src={recipe.image} alt={recipe.title} className="rounded-xl" />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{recipe.title}</h2>
			</div>
		</div>
	);
}
