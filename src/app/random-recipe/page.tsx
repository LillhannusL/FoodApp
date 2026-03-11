'use client';

import { useState, useEffect } from 'react';
import ContentBox from '@/components/shared/ContentBox';
import { fetchRandomRecipes } from '@/services/recipeApi';
import RecipeCarousel from '@/components/recipe/recipeCarousel';

// import MockData from '@/data/mock-recipes.json';
import type { Recipe } from '@/types';

export default function RandomRecipePage() {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	// const Allrecipes = MockData.recipes;

	// MockData
	// useEffect(() => {
	// 	const loadInitial = () => {
	// 		setRecipes(Allrecipes);
	// 		setIsLoading(false);
	// 	};
	// 	loadInitial();
	// }, [Allrecipes]);

	useEffect(() => {
		const loadInitial = async () => {
			const data = await fetchRandomRecipes(10);

			console.log('data som hämtats:', data);

			setRecipes(data);
			setIsLoading(false);
		};
		loadInitial();
	}, []);

	return (
		<section className="px-4">
			<h1 className="text-4xl font-bold pt-16 pb-8 text-center md:pt-28">
				Skulle du vilja pröva:
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
					<RecipeCarousel recipes={recipes} />
				</div>
				<button className="btn">Se Recept</button>
			</ContentBox>
		</section>
	);
}
