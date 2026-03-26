'use client';
export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ContentBox from '@/components/shared/ContentBox';
import {
	fetchRandomRecipes,
	fetchRecipeByIngredient,
	fetchRecipefromQuiz,
} from '@/services/recipeApi';
import RecipeCarousel from '@/components/recipe/recipeCarousel';
import { useIngredientsStore } from '@/store/useIngredientsStore';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/store/useQuizStore';
import type { RecipeData } from '@/types';

export default function ResultsPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [recipes, setRecipes] = useState<RecipeData[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMock, setIsMock] = useState(false);

	const type = searchParams.get('type');
	const { ingredients } = useIngredientsStore();
	const { result } = useQuizStore();

	useEffect(() => {
		const fetchData = async () => {
			if (!type) {
				setIsLoading(false);
				return;
			}

			if (type === 'search' && (!ingredients || ingredients.length === 0)) {
				setIsLoading(false);
				return;
			}

			if (type === 'quiz' && !result) {
				setIsLoading(false);
				return;
			}

			setIsLoading(true);

			try {
				let data;

				if (type === 'random') {
					data = await fetchRandomRecipes();
				} else if (type === 'search') {
					data = await fetchRecipeByIngredient(ingredients);
				} else {
					data = await fetchRecipefromQuiz(result);
				}

				setRecipes(data);
			} catch (error) {
				setIsMock(true);
				console.error('Fetching error:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [type, ingredients, result]);

	const handleClick = () => {
		if (!recipes[currentIndex]) return;
		router.push(`/recipes/${recipes[currentIndex].id}`);
	};

	if (!type) {
		return null;
	}

	return (
		<section className="px-4 flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold pt-16 pb-8 text-center md:pt-28">
				We found these:
			</h1>

			<ContentBox>
				{isLoading && (
					<div className="w-full flex justify-center items-center flex-col gap-4">
						<div className="skeleton h-96 w-full"></div>
						<div className="skeleton h-4 w-28"></div>
						<div className="skeleton h-4 w-full"></div>
						<div className="skeleton h-4 w-full"></div>
					</div>
				)}

				{isMock && (
					<div className="badge badge-error gap-2 p-4 mb-4">
						Demo mode: API Limit is reached
					</div>
				)}
				<div>
					<RecipeCarousel
						recipes={recipes}
						currentIndex={currentIndex}
						setCurrentIndex={setCurrentIndex}
					/>
				</div>
				<button
					className="btn w-full bg-green-gradient shadow-md border-none text-lg py-4 font-semibold rounded-xl sm:max-w-xl mx-auto"
					onClick={handleClick}
				>
					See recipe
				</button>
			</ContentBox>
		</section>
	);
}
