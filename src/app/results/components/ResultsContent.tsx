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
import { useResultStore } from '@/store/useResultStore';

export default function ResultsPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [recipes, setRecipes] = useState<RecipeData[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMock, setIsMock] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const type = searchParams.get('type');
	const { ingredients } = useIngredientsStore();
	const { storedResult, setStoredResult } = useResultStore();
	const { result } = useQuizStore();

	useEffect(() => {
		const fetchData = async () => {
			if (!type) {
				setIsLoading(false);
				setError('No type found');
				return;
			}

			if (storedResult && storedResult.length > 0) {
				setRecipes(storedResult);
				setIsLoading(false);
				return;
			}

			if (type === 'search' && (!ingredients || ingredients.length === 0)) {
				setIsLoading(false);
				setError('No recipes found based on the ingredients');
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
				setStoredResult(data);
			} catch (err) {
				setIsMock(true);
				setError('An error occured');
				console.error('Fetching error:', err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [type, ingredients, result, setStoredResult]);

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

				{error && (
					<p className="text-error text-lg text-center mt-24">{error}</p>
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
				{!error && (
					<button
						className="btn btn-block bg-green-gradient shadow-md border-none text-lg text-light-primary py-4 font-semibold rounded-xl sm:max-w-xl mx-auto"
						onClick={handleClick}
					>
						See recipe
					</button>
				)}
			</ContentBox>
		</section>
	);
}
