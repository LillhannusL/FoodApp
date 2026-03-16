import type { RecipeData } from '@/types/index';

interface Props {
	recipes: RecipeData[];
	currentIndex: number;
	setCurrentIndex: (index: number) => void;
}

export default function RecipeCarousel({
	recipes,
	currentIndex,
	setCurrentIndex,
}: Props) {
	if (!recipes || recipes.length === 0) return null;

	const goToNext = () => {
		//nästa är = om currentIndex är lika med längden på recipes - 1 sätt till 0 annars sätt currentIndex +1
		const next = currentIndex === recipes.length - 1 ? 0 : currentIndex + 1;
		setCurrentIndex(next);
		document.getElementById(`slide${next}`)?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'start',
		});
	};

	const gotToPrev = () => {
		//föregående är = om currentIndex är lika med 0 sätt
		const prev = currentIndex === 0 ? recipes.length - 1 : currentIndex - 1;
		setCurrentIndex(prev);
		document.getElementById(`slide${prev}`)?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'start',
		});
	};

	return (
		<div className="carousel w-full overflow-hidden">
			{recipes.map((recipe, index) => {
				return (
					<div
						key={recipe.id}
						id={`slide${index}`}
						className="carousel-item relative w-full flex flex-col"
					>
						<div className="relative h-64 w-full">
							<img
								src={recipe.image}
								className="w-full h-full object-cover"
								alt={recipe.title}
							/>

							<div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
								<button
									onClick={gotToPrev}
									className="btn btn-circle btn-sm bg-black/20 border-none text-white backdrop-blur-md hover:bg-black/40"
								>
									❮
								</button>
								<button
									onClick={goToNext}
									className="btn btn-circle btn-sm bg-black/20 border-none text-white backdrop-blur-md hover:bg-black/40"
								>
									❯
								</button>
							</div>
						</div>

						{/* Text-sektion under bilden */}
						<div className=" ">
							<h4 className="">{recipe.title}</h4>
						</div>
					</div>
				);
			})}
		</div>
	);
}
