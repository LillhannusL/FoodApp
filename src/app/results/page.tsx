'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ContentBox from '@/components/shared/ContentBox';
import {
	fetchRandomRecipes,
	fetchRecipeByIngredient,
} from '@/services/recipeApi';
import RecipeCarousel from '@/components/recipe/recipeCarousel';
import { useIngredientsStore } from '@/store/useIngredientsStore';
import { useRouter } from 'next/navigation';

import MockData from '@/data/mock-recipes.json';
import type { RecipeData } from '@/types';

export default function ResultsPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [recipes, setRecipes] = useState<RecipeData[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentRecipe = recipes[currentIndex];

	const type = searchParams.get('type');
	const { ingredients } = useIngredientsStore();

	const Allrecipes = MockData.recipes;
	MockData;
	useEffect(() => {
		const loadInitial = () => {
			setRecipes(Allrecipes);
			setIsLoading(false);
		};
		loadInitial();
	}, [Allrecipes]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		if (type !== 'random' && (!ingredients || ingredients.length === 0)) {
	// 			setIsLoading(false);
	// 			return;
	// 		}

	// 		setIsLoading(true);
	// 		try {
	// 			let data;
	// 			if (type === 'random') {
	// 				data = await fetchRandomRecipes(10);
	// 			} else {
	// 				data = await fetchRecipeByIngredient(ingredients);
	// 			}

	// 			setRecipes(data);
	// 		} catch (error) {
	// 			console.error('Fetching error:', error);
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	};

	// 	fetchData();
	// }, [type, ingredients]);

	const handleClick = () => {
		router.push(`/recipes/${recipes[currentIndex].id}`);
	};

	return (
		<section className="px-4">
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
				<div>
					<RecipeCarousel
						recipes={recipes}
						currentIndex={currentIndex}
						setCurrentIndex={setCurrentIndex}
					/>
				</div>
				<button className="btn" onClick={handleClick}>
					Se hela receptet!
				</button>
			</ContentBox>
		</section>
	);
}
