interface Ingredient {
	id: number;
	name: string;
	aisle: string;
	measures: {
		metric: {
			amount: number;
			unitShort: string;
		};
	};
}

interface IngredientsListProps {
	ingredients: Ingredient[];
}

export default function IngredientsList({ ingredients }: IngredientsListProps) {
	//Funktion för att avgöra vilken bakgrund som ingredienserna ska ha

	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-3xl font-bold">Ingredients</h2>
				<ul>
					{ingredients.map((ingredient: any) => (
						<li key={ingredient.id} className="flex gap-2 justify-between pb-2">
							<span>{ingredient.name}</span>
							<span>
								{ingredient.measures.metric.amount}{' '}
								{ingredient.measures.metric.unitShort}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
