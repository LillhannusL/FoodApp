import type { Recipe } from '@/types/index';

interface Props {
	recipes: Recipe[];
}

export default function RecipeCarousel({ recipes }: Props) {
	if (!recipes || recipes.length === 0) return null;

	return (
		<div className="carousel w-full rounded-3xl overflow-hidden shadow-xl border border-white/20">
			{recipes.map((recipe, index) => {
				const prev = index === 0 ? recipes.length - 1 : index - 1;
				const next = index === recipes.length - 1 ? 0 : index + 1;

				return (
					<div
						key={recipe.id}
						id={`slide${index}`}
						className="carousel-item relative w-full flex flex-col"
					>
						{/* Bild-container */}
						<div className="relative h-64 w-full">
							<img
								src={recipe.image}
								className="w-full h-full object-cover"
								alt={recipe.title}
							/>

							<div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
								<a
									href={`#slide${prev}`}
									className="btn btn-circle btn-sm bg-black/20 border-none text-white backdrop-blur-md hover:bg-black/40"
								>
									❮
								</a>
								<a
									href={`#slide${next}`}
									className="btn btn-circle btn-sm bg-black/20 border-none text-white backdrop-blur-md hover:bg-black/40"
								>
									❯
								</a>
							</div>
						</div>

						{/* Text-sektion under bilden */}
						<div className="p-6 bg-light-primary/40 backdrop-blur-md flex flex-col items-center justify-center text-center min-h-25">
							<h4 className="font-bold text-lg text-dark-primary leading-tight">
								{recipe.title}
							</h4>
						</div>
					</div>
				);
			})}
		</div>
	);
}
